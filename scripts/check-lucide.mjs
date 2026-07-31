import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import * as lucide from "lucide-react";

const roots = ["app", "components", "lib"];
const files = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(tsx?|mjs)$/.test(name)) files.push(p);
  }
}
roots.forEach((r) => {
  try {
    walk(r);
  } catch {}
});

let bad = 0;
for (const f of files) {
  const src = readFileSync(f, "utf8");
  const m = src.match(/import\s*\{([^}]+)\}\s*from\s*["']lucide-react["']/g);
  if (!m) continue;
  for (const imp of m) {
    const names = imp
      .replace(/import\s*\{|\}\s*from\s*["']lucide-react["']/g, "")
      .split(",")
      .map((s) => s.trim().split(/\s+as\s+/)[0])
      .filter(Boolean);
    for (const n of names) {
      if (!(n in lucide)) {
        console.log(`MISSING ${n} in ${f}`);
        bad++;
      }
    }
  }
}
console.log(bad === 0 ? "all lucide imports OK" : `${bad} missing icons`);

"use client";

import { useActionState, useTransition } from "react";
import { saveRedirect, deleteRedirect, type AdminFormState } from "@/lib/actions/admin";
import { SubmitButton, FormMsg, inputCls } from "./ui";

type RedirectRow = { id: string; fromPath: string; toPath: string; permanent: boolean };

export default function RedirectManager({ redirects }: { redirects: RedirectRow[] }) {
  const [state, action] = useActionState<AdminFormState, FormData>(saveRedirect, null);
  const [pending, startTransition] = useTransition();

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="overflow-hidden rounded-2xl border border-black/8 bg-white">
        <table className="w-full text-[0.88rem]">
          <thead>
            <tr className="border-b border-black/8 text-left text-[0.78rem] text-black/45">
              <th className="px-5 py-3 font-medium">原路径</th>
              <th className="px-5 py-3 font-medium">跳转到</th>
              <th className="px-5 py-3 font-medium">类型</th>
              <th className="px-5 py-3 text-right font-medium">操作</th>
            </tr>
          </thead>
          <tbody>
            {redirects.length === 0 ? (
              <tr><td colSpan={4} className="px-5 py-10 text-center text-black/40">暂无重定向规则</td></tr>
            ) : null}
            {redirects.map((r) => (
              <tr key={r.id} className="border-b border-black/4 last:border-0">
                <td className="px-5 py-3 font-mono text-[0.82rem]">{r.fromPath}</td>
                <td className="px-5 py-3 font-mono text-[0.82rem]">{r.toPath}</td>
                <td className="px-5 py-3 text-black/60">{r.permanent ? "301 永久" : "302 临时"}</td>
                <td className="px-5 py-3 text-right">
                  <button
                    disabled={pending}
                    onClick={() => startTransition(() => deleteRedirect(r.id))}
                    className="text-[0.82rem] text-red-500 hover:underline disabled:opacity-50"
                  >
                    删除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form action={action} className="h-fit space-y-4 rounded-2xl border border-black/8 bg-white p-5">
        <p className="font-semibold">新增重定向</p>
        <div>
          <label className="mb-1 block text-[0.75rem] text-black/45">原路径（locale 无关，如 /products/old-slug）</label>
          <input name="fromPath" required placeholder="/products/old-slug" className={inputCls} />
        </div>
        <div>
          <label className="mb-1 block text-[0.75rem] text-black/45">跳转到</label>
          <input name="toPath" required placeholder="/products/new-slug" className={inputCls} />
        </div>
        <label className="flex items-center gap-2 text-[0.88rem]">
          <input type="checkbox" name="permanent" defaultChecked className="size-4" />
          301 永久重定向（传递 SEO 权重）
        </label>
        <SubmitButton className="w-full">保存</SubmitButton>
        <FormMsg state={state} />
      </form>
    </div>
  );
}

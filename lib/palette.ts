/**
 * 产品/集合主题色系统。colorKey 存数据库，前端映射为一组和谐色值。
 * tone() 供页面取色；pal() 为 ProductVisual 兼容别名。
 */
export type ColorKey =
  | "forest"
  | "moss"
  | "amber"
  | "clay"
  | "plum"
  | "teal"
  | "rose"
  | "oat"
  | "charcoal"
  | "sky";

export type Tone = {
  /** 主色 */
  base: string;
  /** 深色（文字/盖子） */
  deep: string;
  /** 中间色（渐变用） */
  mid: string;
  /** 浅背景 */
  soft: string;
  /** 光晕色 */
  glow: string;
  /** 标签底色 */
  label: string;
};

export const TONES: Record<ColorKey, Tone> = {
  forest: { base: "#2f5d46", deep: "#1d3f2f", mid: "#3d7458", soft: "#e6efe7", glow: "#7fae94", label: "#f6f3ea" },
  moss: { base: "#5a7a44", deep: "#3c5429", mid: "#6f925a", soft: "#ecf1e2", glow: "#a3bd85", label: "#f8faf0" },
  amber: { base: "#d97f2a", deep: "#8f5111", mid: "#e89a4b", soft: "#fbf0de", glow: "#f0b878", label: "#fff8ec" },
  clay: { base: "#c05e3f", deep: "#8a3d24", mid: "#d47a5b", soft: "#f9e9e2", glow: "#e39c82", label: "#fdf4ef" },
  plum: { base: "#7a5379", deep: "#523551", mid: "#967195", soft: "#f2eaf2", glow: "#b995b8", label: "#faf5fa" },
  teal: { base: "#33756b", deep: "#1f4d46", mid: "#4a9187", soft: "#e4f0ee", glow: "#84b8af", label: "#f2faf8" },
  rose: { base: "#b56576", deep: "#834557", mid: "#c98394", soft: "#f8ebee", glow: "#dba7b3", label: "#fcf4f6" },
  oat: { base: "#a98d55", deep: "#756030", mid: "#bda36e", soft: "#f5efe1", glow: "#d3bd8f", label: "#fbf7ec" },
  charcoal: { base: "#4a4a46", deep: "#262623", mid: "#66665f", soft: "#ebebe8", glow: "#9c9c94", label: "#f5f5f2" },
  sky: { base: "#3d6e8f", deep: "#27506c", mid: "#5789ab", soft: "#e6eff5", glow: "#8fb4cc", label: "#f2f8fb" },
};

export function tone(key: string): Tone {
  return TONES[(key as ColorKey) in TONES ? (key as ColorKey) : "forest"];
}

/** ProductVisual 兼容别名 */
export const pal = tone;

export const speciesLabel: Record<string, string> = {
  dog: "For Dogs",
  cat: "For Cats",
  dog_cat: "For Dogs & Cats",
};

export const formatLabel: Record<string, string> = {
  chew: "Soft Chews",
  powder: "Powder",
  oil: "Oil",
  paste: "Paste",
  dropper: "Liquid Drops",
};

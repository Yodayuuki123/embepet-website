import {
  Bone,
  Leaf,
  Sparkles,
  Moon,
  MoonStar,
  Shield,
  Sun,
  Dog,
  Cat,
  Heart,
  Brain,
  Droplets,
  type LucideIcon,
} from "lucide-react";

/** 兼容大小写与连字符写法（数据库存的是 "cloud-moon" 这类小写值） */
const icons: Record<string, LucideIcon> = {
  bone: Bone,
  leaf: Leaf,
  sparkles: Sparkles,
  moon: Moon,
  "cloud-moon": MoonStar,
  shield: Shield,
  sun: Sun,
  dog: Dog,
  cat: Cat,
  heart: Heart,
  brain: Brain,
  droplets: Droplets,
};

export default function CollectionIcon({
  name,
  className,
  strokeWidth = 1.7,
}: {
  name: string | null | undefined;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = icons[(name ?? "heart").toLowerCase()] ?? Heart;
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

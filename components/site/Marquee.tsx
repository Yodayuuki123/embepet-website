/** 无限横向跑马灯（纯 CSS 动画，零 JS） */
export default function Marquee({
  children,
  className = "",
  slow = false,
}: {
  children: React.ReactNode;
  className?: string;
  slow?: boolean;
}) {
  return (
    <div className={`overflow-clip ${className}`}>
      <div
        className={`flex w-max items-center gap-0 ${slow ? "animate-marquee-slow" : "animate-marquee"}`}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

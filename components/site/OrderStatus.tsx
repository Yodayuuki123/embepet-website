const styles: Record<string, { label: string; cls: string }> = {
  PENDING: { label: "Payment pending", cls: "bg-amber/15 text-amber" },
  PAID: { label: "Paid", cls: "bg-forest/10 text-forest-mid" },
  FULFILLED: { label: "Preparing", cls: "bg-sky-100 text-sky-800" },
  SHIPPED: { label: "Shipped", cls: "bg-forest/10 text-forest-mid" },
  DELIVERED: { label: "Delivered", cls: "bg-forest text-cream" },
  CANCELLED: { label: "Cancelled", cls: "bg-ink/8 text-ink-soft" },
  REFUNDED: { label: "Refunded", cls: "bg-clay/12 text-clay" },
};

export function orderStatusBadge(status: string) {
  const s = styles[status] ?? styles.PENDING;
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] ${s.cls}`}>
      {s.label}
    </span>
  );
}

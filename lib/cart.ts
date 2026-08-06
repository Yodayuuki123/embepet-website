import { cache } from "react";
import { cookies } from "next/headers";
import { db } from "./db";

export const CART_COOKIE = "ep_cart";

export type CartWithItems = NonNullable<Awaited<ReturnType<typeof loadCart>>>;

async function loadCart(cartId: string) {
  return db.cart.findUnique({
    where: { id: cartId },
    include: {
      items: {
        include: {
          variant: {
            include: {
              product: {
                select: {
                  slug: true,
                  name: true,
                  subtitle: true,
                  colorKey: true,
                  format: true,
                  species: true,
                  images: true,
                },
              },
            },
          },
        },
        orderBy: { id: "asc" },
      },
    },
  });
}

/** 只读获取购物车（RSC 渲染期不允许写 cookie） */
export const getCart = cache(async () => {
  const jar = await cookies();
  const cartId = jar.get(CART_COOKIE)?.value;
  if (!cartId) return null;
  return loadCart(cartId);
});

export function cartSubtotalCents(cart: CartWithItems | null) {
  if (!cart) return 0;
  return cart.items.reduce((sum: any, item: any) => sum + item.variant.priceCents * item.qty, 0);
}

export function cartCount(cart: CartWithItems | null) {
  if (!cart) return 0;
  return cart.items.reduce((sum: any, item: any) => sum + item.qty, 0);
}

export function cartTotals(cart: CartWithItems | null) {
  return { subtotalCents: cartSubtotalCents(cart), count: cartCount(cart) };
}

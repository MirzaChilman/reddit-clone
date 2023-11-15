"use server";
import { cookies } from "next/headers";

/**
 * Sets the layout type in the cookie store.
 *
 * @param {('card'|'classic'|'compact')} type - The type of the layout.
 */
export const setLayout = (type) => {
  const cookieStore = cookies();
  cookieStore.set("layout", type);
};

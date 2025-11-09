import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useQuantityStore = create((set) => ({
  quantity: 1,
  incrementQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
  decrementQuantity: () =>
    set((state) => ({ quantity: state.quantity > 1 ? state.quantity - 1 : 1 })),
  resetQuantity: () => set({ quantity: 1 }),
}));

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (car) => set((state) => ({ cart: [...state.cart, car] })),
    }),
    { name: "cart" }
  )
);

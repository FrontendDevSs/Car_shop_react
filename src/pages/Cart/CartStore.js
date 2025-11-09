import { create } from "zustand";
import { persist } from "zustand/middleware";
import contactImg from "../../assets/icons/contactImg.png";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (car, quantity) =>
        set((state) => {
          const exists = state.cart.find(
            (carInCart) => carInCart._id === car._id
          );

          if (exists) {
            return {
              cart: state.cart.map((carInCart) =>
                carInCart._id === car._id
                  ? { ...carInCart, qty: carInCart.qty + quantity }
                  : carInCart
              ),
            };
          }

          console.log({ cart: [...state.cart, { ...car, qty: quantity }] });
          return { cart: [...state.cart, { ...car, qty: quantity }] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((carInCart) => carInCart._id !== id),
        })),

      updateQuantity: (id, qty) =>
        set((state) => ({
          cart: state.cart.map((carInCart) =>
            carInCart._id === id ? { ...carInCart, qty } : carInCart
          ),
        })),
    }),
    { name: "cart-storage" }
  )
);

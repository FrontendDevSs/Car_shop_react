import { create } from "zustand";
import { persist } from "zustand/middleware";
import contactImg from "../../assets/icons/contactImg.png";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [
        {
          id: 1,
          title: "Test Car",
          description: "This is a test car",
          image: contactImg,
          price: 20000,
          qty: 1,
        },
        {
          id: 2,
          title: "Test Car",
          description: "This is a test car",
          image: contactImg,
          price: 20000,
          qty: 1,
        },
        {
          id: 3,
          title: "Test Car",
          description: "This is a test car",
          image: contactImg,
          price: 20000,
          qty: 1,
        },
        {
          id: 4,
          title: "Test Car",
          description: "This is a test car",
          image: contactImg,
          price: 20000,
          qty: 1,
        },
      ],

      addToCart: (car) =>
        set((state) => {
          const exists = state.cart.find(
            (carInCart) => carInCart.id === car.id
          );
          if (exists) {
            return {
              cart: state.cart.map((carInCart) =>
                carInCart.id === car.id
                  ? { ...carInCart, qty: carInCart.qty + 1 }
                  : carInCart
              ),
            };
          }
          return { cart: [...state.cart, { ...car, qty: 1 }] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((carInCart) => carInCart.id !== id),
        })),

      updateQuantity: (id, qty) =>
        set((state) => ({
          cart: state.cart.map((carInCart) =>
            carInCart.id === id ? { ...carInCart, qty } : carInCart
          ),
        })),
    }),
    { name: "cart-storage" }
  )
);

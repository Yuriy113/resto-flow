import { IDish } from "models/dish";
import { createContext } from "react";

export type TCartContext = {
    cart: IDish[];
    addToCart: (dishId: IDish['id']) => void;
    removeFromCart: (dishId: IDish['id']) => void;
    clearCart: () => void;
}

export const CartContext = createContext<TCartContext>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
});

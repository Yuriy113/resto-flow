import { dishes } from "api/mock";
import { IDish } from "models/dish";
import React, { useCallback, useMemo, useState } from "react";

import { CartContext } from "./cart-context";

type TCartProviderProps = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: TCartProviderProps) => {
    const [cart, setCart] = useState<IDish[]>([]);

    const addToCart = useCallback((dishId: IDish['id']) => {
        const dish = dishes.find((item) => item.id === dishId);

        if (!dish) {
            return;
        }

        setCart((prev) => [...prev, dish]);
    }, []);

    const removeFromCart = useCallback((dishId: IDish['id']) => {
        setCart((prev) => prev.filter((item) => item.id !== dishId));
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);
    }, []);

    const getCartTotal = useCallback(() => {
        return cart.reduce((acc, item) => acc + item.price, 0);
    }, [cart]);

    const value = useMemo(
        () => ({
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            getCartTotal,
        }),
        [cart, addToCart, removeFromCart, clearCart, getCartTotal],
    );

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};


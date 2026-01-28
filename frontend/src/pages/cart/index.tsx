import { useContext } from "react";
import { CartContext } from "store/cart/cart-context";

export const CartPage = () => {

    const { cart } = useContext(CartContext);

    return (
        <div>
            <h1>Resto Flow</h1>
            <div>Cart</div>
            {cart.map((dish) => (
                <div key={dish.id}>
                    <h2>{dish.title}</h2>
                    <p>{dish.price} ₽</p>
                </div>
            ))}
        </div>
    );
};
import { Typography } from 'components/ui/Typography';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CartContext } from 'store/cart/cart-context';

import styles from './main.module.css';

export const MainLayout = () => {
    const { cart, getCartTotal } = useContext(CartContext);
    const cartCount = cart.length;
    const cartTotal = getCartTotal();

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Link to="/" className={styles.logo}>
                    Resto Flow
                </Link>
                <Typography>
                    Уникальное предложение
                </Typography>
                <div className={styles.cart}>
                    <Link to="/cart" className={styles.cartLink}>
                        <span className={styles.cartIcon}>🛒</span>
                        <span className={styles.cartInfo}>
                            <span className={styles.cartCount}>{cartCount}</span>
                            <span className={styles.cartTotal}>{cartTotal}₽</span>
                        </span>
                    </Link>
                </div>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

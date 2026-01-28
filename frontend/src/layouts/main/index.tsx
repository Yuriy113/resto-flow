import { Typography } from 'components/ui/Typography';
import { Link, Outlet } from 'react-router-dom';

import styles from './main.module.css';

export const MainLayout = () => {
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
                            <span className={styles.cartCount}>0</span>
                            <span className={styles.cartTotal}>0₽</span>
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

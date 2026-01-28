import cn from 'clsx';
import { Button } from 'components/ui/Button';
import { Modal } from 'components/ui/Modal';
import { Typography } from 'components/ui/Typography';
import { IDish } from 'models/dish';
import { useContext, useState } from 'react';
import { CartContext } from 'store/cart/cart-context';

import styles from './DishCard.module.css';

type TDishCardProps = {
    variant?: 'short' | 'medium' | 'full';
    dish: IDish;
};

export const DishCard = (props: TDishCardProps) => {
    const { addToCart } = useContext(CartContext);
    const { variant = 'short', dish } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={cn(styles.card, styles[variant])}>
            <Typography variant="header4">{dish.title}</Typography>
            <img className={styles.image} src={dish.imageSrc} alt="title" />
            <Typography>{dish.price} ₽</Typography>
            {(variant === 'medium' || variant === 'full') && (
                <div>{dish.description}</div>
            )}
            {variant === 'full' && (
                <>
                    {dish.ingridients?.map((ingredient) => (
                        <Typography key={ingredient.title}>
                            {ingredient.title}
                        </Typography>
                    ))}
                </>
            )}
            <div className={styles.buttons}>
                {variant !== 'full' && (
                    <Button
                        className={styles.moreButton}
                        onClick={() => setIsModalOpen(true)}
                    >
                        <Typography variant="textButton">Подробнее</Typography>
                    </Button>
                )}
                <Button
                    className={variant !== 'full' ? styles.addButton : ''}
                    onClick={() => addToCart(dish.id)}
                >
                    <Typography variant="textButton">Добавить в корзину</Typography>
                </Button>
            </div>
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <DishCard variant="full" dish={dish} />
                </Modal>
            )}
        </div>
    );
};

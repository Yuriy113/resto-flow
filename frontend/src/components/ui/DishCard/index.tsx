import cn from 'clsx';
import { IDish } from 'models/dish';
import { useState } from 'react';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { Typography } from '../Typography';
import styles from './DishCard.module.css';

type TDishCardProps = {
    variant?: 'short' | 'medium' | 'full';
    dish: IDish;
};

export const DishCard = (props: TDishCardProps) => {
    const { variant = 'short', dish } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={cn(styles.card, styles[variant])}>
            <Typography>{dish.title}</Typography>
            <img className={styles.image} src={dish.imageSrc} alt="title" />
            <Typography>{dish.price} ₽</Typography>
            {(variant === 'medium' || variant === 'full') && (
                <div>{dish.description}</div>
            )}
            {variant !== 'full' && (
                <Button onClick={() => setIsModalOpen(true)}>Подробнее</Button>
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
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <DishCard variant="full" dish={dish} />
                </Modal>
            )}
        </div>
    );
};

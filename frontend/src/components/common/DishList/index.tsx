import { DishCard } from "components/common/DishCard";
import { IDish } from "models/dish";

import styles from './DishList.module.css';

type TDishListProps = {
    title: string;
    dishes: IDish[];
};

export const DishList = (props: TDishListProps) => {
    const { title, dishes } = props;

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <div className={styles.list}>
                {dishes.map(dish => (
                    <DishCard key={dish.title} variant="medium" dish={dish} />
                ))}
            </div>
        </div>
    );
};
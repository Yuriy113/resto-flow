import { Typography } from "../Typography";
import styles from './DishCard.module.css';

type TDishCardProps = {
    variant?: 'short' | 'full';
    src: string;
    title: string;
}

export const DishCard = (props : TDishCardProps) => {
    const { variant = 'short', src, title } = props;

    return (<div className={styles.card}>
        <Typography>{title}</Typography>
        <img className={styles.image} src={src} alt="title" />
        {variant === 'full' && <>
            <h3>Ингридиенты</h3>
            <p>укроп</p>
            <p>кошачья жопа</p>
            <p>ведро воды</p>
        </>}
    </div>)
}
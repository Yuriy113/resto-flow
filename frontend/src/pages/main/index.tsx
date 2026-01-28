import { dishes } from "api/mock";
import { DishList } from "components/common/DishList";

import styles from './MainPage.module.css';

export const MainPage = () => {
    return (
        <div className={styles.container}>
            <DishList title="Завтраки" dishes={dishes}/>
        </div>
    );
};


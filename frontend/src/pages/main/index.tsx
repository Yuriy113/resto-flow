import { DishCard } from "components/ui/DishCard";
import { Typography } from "components/ui/Typography";

export const MainPage = () => {
    return (
        <div>
            <h1>Resto Flow</h1>
            <Typography >Добро пожаловать в Resto Flow!</Typography>

            <h2>Завтраки</h2>

            <DishCard variant="short" src="https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" title="плов"/>
            <DishCard variant="short" src="https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" title="плов"/>
            <DishCard variant="short" src="https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" title="плов"/>
        </div>
    );
};


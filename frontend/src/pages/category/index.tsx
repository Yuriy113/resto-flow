import { useParams } from "react-router-dom";

export const CategoryPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Resto Flow</h1>
            <div>Category: {id}</div>
        </div>
    );
};
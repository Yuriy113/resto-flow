import { MainLayout } from 'layouts/main';
import { CartPage } from 'pages/cart';
import { CategoriesPage } from 'pages/categories';
import { CategoryPage } from 'pages/category';
import { DishPage } from 'pages/dish';
import { MainPage } from 'pages/main';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

const routes = createRoutesFromElements(
    <Route element={<MainLayout />}>
        <Route index Component={MainPage} />
        <Route path='categories' Component={CategoriesPage} />
        <Route path='categories/:id' Component={CategoryPage} />
        <Route path='cart' Component={CartPage} />
        <Route path='dish/:id' Component={DishPage} />
    </Route>
);

export const router = createBrowserRouter(routes);

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import { CategoriesPage } from '@/pages/categories';
import { CategoryPage } from '@/pages/category';
import { MainPage } from '@/pages/main';

const routes = createRoutesFromElements(
    <>
        <Route index Component={MainPage} />
        <Route path='categories' Component={CategoriesPage} />
        <Route path='categories/:id' Component={CategoryPage} />
    </>
);

export const router = createBrowserRouter(routes);

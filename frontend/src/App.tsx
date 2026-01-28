import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { CartProvider } from './store/cart/cart-context.tsx';

function App() {
    return (
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    );
}

export default App;

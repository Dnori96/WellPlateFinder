import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Recipes from '@/pages/Recipes';
import NotFoundPage from '@/pages/NotFoundPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@szhsin/react-menu/dist/transitions/slide.css';
import RecipeInfo from '@/pages/RecipeInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/recipes', element: <Recipes /> },
      { path: '/recipes/recipe/:plateId', element: <RecipeInfo /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

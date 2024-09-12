import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.tsx';
import NotFound from './routes/NotFound/index.tsx';
import Produtos from './routes/Produtos/index.tsx';


const routes = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<NotFound/>, children:[
    {path:"/", element:<Home/>},
    {path:"/produtos", element:<Produtos/>},

  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)

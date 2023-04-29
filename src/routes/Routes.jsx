import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Category from '../Pages/Home/Category/Category';
import NewsLayout from '../Layouts/NewsLayout';
import News from '../Pages/News/News';
import LoginLayout from '../Layouts/LoginLayout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import PrivateRoutes from './PrivateRoutes';
import Terms from '../Pages/Shared/Terms/Terms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/category/0" />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/terms',
        element: <Terms />,
      },
    ],
  },
  {
    path: '/category',
    element: <Main />,
    children: [
      {
        path: ':id',
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://the-new-dragon-server-shakibhossainmuhammad.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: 'news',
    element: <NewsLayout />,
    children: [
      {
        path: ':id',
        element: (
          <PrivateRoutes>
            <News />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-new-dragon-server-shakibhossainmuhammad.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

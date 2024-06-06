import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>home</div>,
  },
  {
    path: '/signin',
    element: <div>sign in</div>,
  },
  {
    path: '/signup',
    element: <div>sign up</div>,
  },
  {
    path: '/profile',
    element: <div>profile</div>,
  },
  {
    path: '*',
    element: <div>not found</div>,
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

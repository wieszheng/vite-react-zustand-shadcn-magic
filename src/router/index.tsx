import { lazy, Suspense } from 'react';
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/layout';

import { Login } from '@/pages/login';
import Home from '@/pages/home';
import NotFoundError from '@/pages/errors/404';
import UnauthorisedError from '@/pages/errors/401';
import GeneralError from '@/pages/errors/500';
import MaintenanceError from '@/pages/errors/503';

const withLoadingComponent = (comp: JSX.Element) => (
  <Suspense fallback={<div>Loading······</div>}>{comp}</Suspense>
);

const routes: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      // Error routes
      { path: '/500', Component: GeneralError },
      { path: '/404', Component: NotFoundError },
      { path: '/503', Component: MaintenanceError },
      { path: '/401', Component: UnauthorisedError },

      // Fallback 404 route
      { path: '*', Component: NotFoundError }
    ]
  }
];
const router = createBrowserRouter(routes as unknown as RouteObject[]);
export default router;

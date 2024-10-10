import { lazy, Suspense } from 'react';
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/layout';

import { Login } from '@/pages/login';
import Home from '@/pages/home'

const withLoadingComponent = (comp: JSX.Element) => (
    <Suspense fallback={<div>Loading······</div>}>
        {comp}
    </Suspense>
)

const routes: RouteObject[] = [
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            }
        ],
    },
    // {
    //     path: "/login",
    //     element: withLoadingComponent(<About/>),
    // },
];
const router = createBrowserRouter(routes as unknown as RouteObject[]);
export default router;
import { lazy } from 'react';
import PublicLayouts from '../components/layouts/public-layouts';
import Loadable from '../components/ui-kits/loading/loadable';
import * as slug from './slug';

// project imports

// dashboard routing
const Home = Loadable(lazy(() => import('../pages/home/home')));


const PublicRoute = {
    path: '/',
    element: <PublicLayouts />,
    children: [
        {
            path: slug.HOME,
            element: <Home />,
        },
        {
            path: "*",
            element: <Home />,
        }
    ],
};

export default PublicRoute;

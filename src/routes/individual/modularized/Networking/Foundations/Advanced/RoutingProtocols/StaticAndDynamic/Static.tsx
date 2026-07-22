import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/Foundations/Advanced/RoutingProtocols/StaticAndDynamic/Static/Introduction'));

const Static: RouteObject[] = [
    {
        path: '/foundations/advanced/routing-protocols/static-and-dynamic/static/introduction',
        element: <Introduction />,
    }
];

export default Static;
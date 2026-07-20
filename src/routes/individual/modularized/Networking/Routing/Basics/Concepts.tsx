import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RoutingProtocolOverview = lazy(() => import('@/Pages/MainTabs/Networking/Routing/Basics/Concepts/RoutingProtocolOverview'));
const StaticVsDynamic = lazy(() => import('@/Pages/MainTabs/Networking/Routing/Basics/Concepts/StaticVsDynamic'));

const Concepts: RouteObject[] = [
  {
    path: '/routing-protocols/basics/concepts/overview',
    element: <RoutingProtocolOverview />,
  },
  {
    path: '/routing-protocols/basics/concepts/static-vs-dynamic',
    element: <StaticVsDynamic />,
  },
];

export default Concepts;

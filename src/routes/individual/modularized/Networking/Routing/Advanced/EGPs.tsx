import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BGP = lazy(() => import('@/Pages/MainTabs/Networking/Routing/Advanced/EGPs/BGP'));
const PolicyAndPathSelection = lazy(() => import('@/Pages/MainTabs/Networking/Routing/Advanced/EGPs/PolicyAndPathSelection'));

const EGPs: RouteObject[] = [
  {
    path: '/routing-protocols/advanced/egps/bgp',
    element: <BGP />,
  },
  {
    path: '/routing-protocols/advanced/egps/policy-and-path-selection',
    element: <PolicyAndPathSelection />,
  },
];

export default EGPs;

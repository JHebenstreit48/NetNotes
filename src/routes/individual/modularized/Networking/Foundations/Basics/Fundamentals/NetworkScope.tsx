import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/NetworkScope/Introduction')
);
const Internet = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/NetworkScope/InternetAndNetworks')
);
const LocalNetworks = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/NetworkScope/LocalNetworks')
);

const NetworkScopeAndDevices: RouteObject[] = [
  {
    path: '/networking/foundations/basics/fundamentals/network-scope/introduction',
    element: <Introduction />,
  },
  {
    path: '/networking/foundations/basics/fundamentals/network-scope/internet',
    element: <Internet />,
  },
  {
    path: '/networking/foundations/basics/fundamentals/network-scope/local-networks',
    element: <LocalNetworks />,
  }
];

export default NetworkScopeAndDevices;
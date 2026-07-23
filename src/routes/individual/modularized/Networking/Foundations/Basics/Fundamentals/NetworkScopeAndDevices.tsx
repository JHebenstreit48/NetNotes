import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/NetworkScopeAndDevices/Introduction')
);
const Internet = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/NetworkScopeAndDevices/InternetAndNetworks')
);
const LocalNetworks = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/NetworkScopeAndDevices/LocalNetworks')
);
const ConnectedDevices = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/NetworkScopeAndDevices/ConnectedDevices')
);

const NetworkScopeAndDevices: RouteObject[] = [
  {
    path: '/foundations/basics/fundamentals/network-scope-and-devices/introduction',
    element: <Introduction />,
  },
  {
    path: '/foundations/basics/fundamentals/network-scope-and-devices/internet',
    element: <Internet />,
  },
  {
    path: '/foundations/basics/fundamentals/network-scope-and-devices/local-networks',
    element: <LocalNetworks />,
  },
  {
    path: '/foundations/basics/fundamentals/network-scope-and-devices/connected-devices',
    element: <ConnectedDevices />,
  },
];

export default NetworkScopeAndDevices;
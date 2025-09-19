import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Overview/Introduction')
);
const Internet = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Overview/InternetAndNetworks')
);
const LocalNetworks = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Overview/LocalNetworks')
);
const ConnectedDevices = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Overview/ConnectedDevices')
);

const Overview: RouteObject[] = [
  {
    path: '/fundamentals/basics/overview/introduction',
    element: <Introduction />,
  },
  {
    path: '/fundamentals/basics/overview/internet',
    element: <Internet />,
  },
  {
    path: '/fundamentals/basics/overview/local-networks',
    element: <LocalNetworks />,
  },
  {
    path: '/fundamentals/basics/overview/connected-devices',
    element: <ConnectedDevices />,
  }
];

export default Overview;
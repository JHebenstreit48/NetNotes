import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/Fundamentals/Overview/Introduction')
);
const Internet = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/Fundamentals/Overview/InternetAndNetworks')
);
const LocalNetworks = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/Fundamentals/Overview/LocalNetworks')
);
const ConnectedDevices = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/Fundamentals/Overview/ConnectedDevices')
);

const Overview: RouteObject[] = [
  {
    path: '/coreconcepts/basics/fundamentals/overview/introduction',
    element: <Introduction />,
  },
  {
    path: '/coreconcepts/basics/fundamentals/overview/internet',
    element: <Internet />,
  },
  {
    path: '/coreconcepts/basics/fundamentals/overview/localnetworks',
    element: <LocalNetworks />,
  },
  {
    path: '/coreconcepts/basics/fundamentals/overview/connecteddevices',
    element: <ConnectedDevices />,
  }
];

export default Overview;
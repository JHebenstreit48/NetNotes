import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LocalRemoteServer = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Advanced/ServersAndPerformance/LocalRemoteServer'));
const TuningAndResources = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Advanced/ServersAndPerformance/TuningAndResources'));

const ServersAndPerformance: RouteObject[] = [
  {
    path: '/gns3/advanced/servers-and-performance/local-and-remote-server',
    element: <LocalRemoteServer />,
  },
  {
    path: '/gns3/advanced/servers-and-performance/tuning-and-resources',
    element: <TuningAndResources />,
  },
];

export default ServersAndPerformance;

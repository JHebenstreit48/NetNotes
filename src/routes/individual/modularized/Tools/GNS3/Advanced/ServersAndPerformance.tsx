import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LocalRemoteServer = lazy(() => import('@/pages/mainTabs/Tools/GNS3/Advanced/ServersAndPerformance/LocalRemoteServer'));
const TuningAndResources = lazy(() => import('@/pages/mainTabs/Tools/GNS3/Advanced/ServersAndPerformance/TuningAndResources'));

const ServersAndPerformance: RouteObject[] = [
  {
    path: '/tools/gns3/advanced/servers-and-performance/local-and-remote-server',
    element: <LocalRemoteServer />,
  },
  {
    path: '/tools/gns3/advanced/servers-and-performance/tuning-and-resources',
    element: <TuningAndResources />,
  },
];

export default ServersAndPerformance;

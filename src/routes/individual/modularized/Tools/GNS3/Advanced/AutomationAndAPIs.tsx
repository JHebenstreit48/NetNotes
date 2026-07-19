import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StartupConfigs = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Advanced/AutomationAndAPIs/StartupConfigs'));
const GNS3RESTAPI = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Advanced/AutomationAndAPIs/GNS3RESTAPI'));

const AutomationAndAPIs: RouteObject[] = [
  {
    path: '/gns3/advanced/automation-and-apis/startup-configs',
    element: <StartupConfigs />,
  },
  {
    path: '/gns3/advanced/automation-and-apis/gns3-rest-api',
    element: <GNS3RESTAPI />,
  },
];

export default AutomationAndAPIs;

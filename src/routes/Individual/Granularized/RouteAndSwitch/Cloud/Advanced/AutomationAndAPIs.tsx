import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RESTAndWebhooks = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Advanced/AutomationAndAPIs/RESTAndWebhooks'));
const BulkOpsAndCI = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Advanced/AutomationAndAPIs/BulkOpsAndCI'));

const AutomationAndAPIs: RouteObject[] = [
  {
    path: '/cloud/advanced/automation-and-apis/rest-and-webhooks',
    element: <RESTAndWebhooks />,
  },
  {
    path: '/cloud/advanced/automation-and-apis/bulk-ops-and-ci',
    element: <BulkOpsAndCI />,
  },
];

export default AutomationAndAPIs;

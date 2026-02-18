import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NSAPStructure = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/OSIModel/Advanced/CLNSAndAddressing/NSAPStructure'));
const CLNPHeaders = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/OSIModel/Advanced/CLNSAndAddressing/CLNPHeaders'));

const CLNSAndAddressing: RouteObject[] = [
  {
    path: '/coreconcepts/osimodel/advanced/clns-and-addressing/nsap-structure',
    element: <NSAPStructure />,
  },
  {
    path: '/coreconcepts/osimodel/advanced/clns-and-addressing/clnp-headers',
    element: <CLNPHeaders />,
  },
];

export default CLNSAndAddressing;

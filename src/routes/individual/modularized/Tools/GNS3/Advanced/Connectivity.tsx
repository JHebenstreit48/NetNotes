import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CloudNATBridging = lazy(() => import('@/pages/mainTabs/Tools/GNS3/Advanced/Connectivity/CloudNATBridging'));
const HostInternetAccess = lazy(() => import('@/pages/mainTabs/Tools/GNS3/Advanced/Connectivity/HostInternetAccess'));

const Connectivity: RouteObject[] = [
  {
    path: '/tools/gns3/advanced/connectivity/cloud-nat-bridging',
    element: <CloudNATBridging />,
  },
  {
    path: '/tools/gns3/advanced/connectivity/host-and-internet-access',
    element: <HostInternetAccess />,
  },
];

export default Connectivity;

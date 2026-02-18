import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TrustBoundaries = lazy(
  () => import('@/Pages/MainTabs/Networking/Switching/Advanced/QoS/TrustBoundaries')
);
const CoSDSCPMapping = lazy(
  () => import('@/Pages/MainTabs/Networking/Switching/Advanced/QoS/CoSDSCPMapping')
);

const QoS: RouteObject[] = [
  {
    path: '/switching/advanced/qos/trust-boundaries',
    element: <TrustBoundaries />,
  },
  {
    path: '/switching/advanced/qos/cos-dscp-mapping',
    element: <CoSDSCPMapping />,
  },
];

export default QoS;
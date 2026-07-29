import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TrustBoundaries = lazy(
  () => import('@/pages/mainTabs/Networking/Switching/Advanced/QoS/TrustBoundaries')
);
const CoSDSCPMapping = lazy(
  () => import('@/pages/mainTabs/Networking/Switching/Advanced/QoS/CoSDSCPMapping')
);

const QoS: RouteObject[] = [
  {
    path: '/networking/switching/advanced/qos/trust-boundaries',
    element: <TrustBoundaries />,
  },
  {
    path: '/networking/switching/advanced/qos/cos-dscp-mapping',
    element: <CoSDSCPMapping />,
  },
];

export default QoS;
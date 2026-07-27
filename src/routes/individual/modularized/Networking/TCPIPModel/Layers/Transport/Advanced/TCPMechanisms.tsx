import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ThreeWayHandshake = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/ThreeWayHandshake'));
const AcknowledgmentSequencing = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/AcknowledgmentSequencing'));
const WindowingCongestionControl = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/WindowingCongestionControl'));

const TCPMechanisms: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/transport/advanced/tcp-mechanisms/three-way-handshake',
    element: <ThreeWayHandshake />,
  },
  {
    path: '/networking/tcp-ip-model/layers/transport/advanced/tcp-mechanisms/acknowledgment-sequencing',
    element: <AcknowledgmentSequencing />,
  },
  {
    path: '/networking/tcp-ip-model/layers/transport/advanced/tcp-mechanisms/windowing-congestion-control',
    element: <WindowingCongestionControl />,
  },
];

export default TCPMechanisms;

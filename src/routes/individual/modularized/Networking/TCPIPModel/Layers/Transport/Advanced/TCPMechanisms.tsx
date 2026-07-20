import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ThreeWayHandshake = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/ThreeWayHandshake'));
const AcknowledgmentSequencing = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/AcknowledgmentSequencing'));
const WindowingCongestionControl = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/WindowingCongestionControl'));

const TCPMechanisms: RouteObject[] = [
  {
    path: '/tcpip-model/layers/transport/advanced/tcp-mechanisms/three-way-handshake',
    element: <ThreeWayHandshake />,
  },
  {
    path: '/tcpip-model/layers/transport/advanced/tcp-mechanisms/acknowledgment-sequencing',
    element: <AcknowledgmentSequencing />,
  },
  {
    path: '/tcpip-model/layers/transport/advanced/tcp-mechanisms/windowing-congestion-control',
    element: <WindowingCongestionControl />,
  },
];

export default TCPMechanisms;

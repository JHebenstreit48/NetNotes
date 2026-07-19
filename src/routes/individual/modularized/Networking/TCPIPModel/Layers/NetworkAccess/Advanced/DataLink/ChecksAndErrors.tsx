import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FCSCRC = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/ChecksAndErrors/FCSCRC'));
const ErrorsAndCollisions = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/ChecksAndErrors/ErrorsAndCollisions'));

const ChecksAndErrors: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/advanced/data-link/checks-and-errors/fcs-crc',
    element: <FCSCRC />,
  },
  {
    path: '/tcpip-model/layers/network-access/advanced/data-link/checks-and-errors/errors-and-collisions',
    element: <ErrorsAndCollisions />,
  },
];

export default ChecksAndErrors;

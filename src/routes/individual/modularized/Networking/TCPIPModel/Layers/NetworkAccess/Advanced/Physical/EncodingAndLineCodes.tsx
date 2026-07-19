import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NRZManchester = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/EncodingAndLineCodes/NRZManchester'));
const Eightb10b64b66b = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/EncodingAndLineCodes/Eightb10b64b66b'));

const EncodingAndLineCodes: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/advanced/physical/encoding-and-line-codes/nrz-manchester',
    element: <NRZManchester />,
  },
  {
    path: '/tcpip-model/layers/network-access/advanced/physical/encoding-and-line-codes/8b10b-64b66b',
    element: <Eightb10b64b66b />,
  },
];

export default EncodingAndLineCodes;

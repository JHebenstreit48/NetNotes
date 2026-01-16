import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NRZManchester = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/EncodingAndLineCodes/NRZManchester'));
const 8b10b64b66b = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/EncodingAndLineCodes/8b10b64b66b'));

const EncodingAndLineCodes: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/advanced/physical/encoding-and-line-codes/nrz-manchester',
    element: <NRZManchester />,
  },
  {
    path: '/tcpip-model/layers/network-access/advanced/physical/encoding-and-line-codes/8b10b-64b66b',
    element: <8b10b64b66b />,
  },
];

export default EncodingAndLineCodes;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SpeedDuplex = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NegotiationAndDuplex/SpeedDuplex'));
const AutoNegAndAutoMDIMDIX = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NegotiationAndDuplex/AutoNegAndAutoMDIMDIX'));

const NegotiationAndDuplex: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/advanced/physical/negotiation-and-duplex/speed-duplex',
    element: <SpeedDuplex />,
  },
  {
    path: '/tcpip-model/layers/network-access/advanced/physical/negotiation-and-duplex/auto-neg-and-auto-mdi-mdix',
    element: <AutoNegAndAutoMDIMDIX />,
  },
];

export default NegotiationAndDuplex;

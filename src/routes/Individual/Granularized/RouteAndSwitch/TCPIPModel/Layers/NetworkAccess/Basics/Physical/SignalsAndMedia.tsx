import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/SignalsAndMedia/Introduction'));
const BitDigitalSignals = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/SignalsAndMedia/BitDigitalSignals'));

const SignalsAndMedia: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/physical/signals-and-media/introduction',
    element: <Introduction />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/signals-and-media/bit-digital-signals',
    element: <BitDigitalSignals />,
  },
];

export default SignalsAndMedia;

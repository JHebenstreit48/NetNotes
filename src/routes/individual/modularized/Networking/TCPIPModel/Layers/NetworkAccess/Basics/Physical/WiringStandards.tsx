import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const T568AVsT568B = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards/T568AVsT568B'));
const StraightThroughVsCrossover = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards/StraightThroughVsCrossover'));
const TerminatingEthernet = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards/TerminatingEthernet'));


const WiringStandards: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/physical/wiring-standards/t568a-vs-t568b',
    element: <T568AVsT568B />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/wiring-standards/straight-through-vs-crossover',
    element: <StraightThroughVsCrossover />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/wiring-standards/terminating-ethernet',
    element: <TerminatingEthernet />,
  }
];

export default WiringStandards;
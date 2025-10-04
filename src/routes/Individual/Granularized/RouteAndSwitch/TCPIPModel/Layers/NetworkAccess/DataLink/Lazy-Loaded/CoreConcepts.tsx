import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/DataLink/CoreConcepts/Introduction')
);
const BIA = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/DataLink/CoreConcepts/BIA')
);
const ARP = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/DataLink/CoreConcepts/ARP')
);

const CoreConcepts: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/data-link/core-concepts/introduction',
    element: <Introduction />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/data-link/core-concepts/bia',
    element: <BIA />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/data-link/core-concepts/arp',
    element: <ARP />,
  },
];

export default CoreConcepts;
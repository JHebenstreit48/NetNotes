import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/CoreConcepts/Introduction'));
const AddressResolutionProtocol = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/CoreConcepts/ARP'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/data-link/core-concepts/introduction',
    element: <Introduction />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/data-link/core-concepts/arp',
    element: <AddressResolutionProtocol />,
  },
];

export default CoreConcepts;
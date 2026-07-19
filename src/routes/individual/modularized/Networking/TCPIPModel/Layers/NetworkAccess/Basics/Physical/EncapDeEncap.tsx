import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Encapsulation = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/CoreConcepts/Encapsulation'));
const DeEncapsulation = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/CoreConcepts/Deencapsulation'));

const EncapDeEncap: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/data-link/core-concepts/encapsulation',
    element: <Encapsulation />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/data-link/core-concepts/de-encapsulation',
    element: <DeEncapsulation />,
  },
];

export default EncapDeEncap;
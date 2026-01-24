import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Encapsulation = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/EncapsulateAndDeencapsulate/Encapsulation'));
const DeEncapsulation = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/EncapsulateAndDeencapsulate/Deencapsulation'));

const EncapDeEncap: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/physical/encap-deencap/encapsulation',
    element: <Encapsulation />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/encap-deencap/de-encapsulation',
    element: <DeEncapsulation />,
  },
];

export default EncapDeEncap;
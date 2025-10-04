import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Encapsulation = lazy(
  () =>
    import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/EncapsulateAndDeencapsulate/Encapsulation')
);
const Deencapsulation = lazy(
  () =>
    import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/EncapsulateAndDeencapsulate/Deencapsulation')
);

const EncapsulateAndDeencapsulate: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/physical/encap-deencap/encapsulation',
    element: <Encapsulation />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/encap-deencap/deencapsulation',
    element: <Deencapsulation />,
  },
];

export default EncapsulateAndDeencapsulate;
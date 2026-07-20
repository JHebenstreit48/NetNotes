import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Fundamentals = lazy(
  () => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv6/Fundamentals')
);
const AddressTypesAndScope = lazy(
  () => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv6/AddressTypesAndScope')
);
const NDRASLAACDAD = lazy(
  () => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv6/NDRASLAACDAD')
);

const IPv6: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv6/fundamentals',
    element: <Fundamentals />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv6/address-types-and-scope',
    element: <AddressTypesAndScope />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv6/nd-ra-slaac-dad',
    element: <NDRASLAACDAD />,
  },
];

export default IPv6;
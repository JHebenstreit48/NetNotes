import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AddressStructure = lazy(
  () => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4/AddressStructure')
);
const TransmissionTypes = lazy(
  () => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4/TransmissionTypes')
);
const TypesOfAddresses = lazy(
  () => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4/TypesOfAddresses')
);
const IPv4vsIPv6Comparison = lazy(
  () => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4/IPv4VsIPv6Comparison')
);

const IPv4: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv4/address-structure',
    element: <AddressStructure />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv4/transmission-types',
    element: <TransmissionTypes />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv4/types-of-addresses',
    element: <TypesOfAddresses />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv4/ipv4-vs-ipv6-comparison',
    element: <IPv4vsIPv6Comparison />,
  },
];

export default IPv4;
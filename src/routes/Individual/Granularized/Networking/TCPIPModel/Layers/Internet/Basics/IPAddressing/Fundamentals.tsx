import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/Fundamentals/Introduction')
);
const IPv4 = lazy(
  () => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/Fundamentals/IPv4')
);
const DHCP = lazy(
  () => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/Fundamentals/DHCP')
);
const IPv4vsIPv6Comparison = lazy(
  () =>
    import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/Fundamentals/IPv4VsIPv6Comparison')
);

const Fundamentals: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/fundamentals/ipv4',
    element: <IPv4 />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/fundamentals/dhcp',
    element: <DHCP />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/fundamentals/ipv4-vs-ipv6-comparison',
    element: <IPv4vsIPv6Comparison />,
  },
];

export default Fundamentals;
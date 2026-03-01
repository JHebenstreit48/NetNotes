import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () => import('@/Pages/MainTabs/Glossary/Networking/TCPIPModel/Internet/Basics')
);
const IPv4AndIPv6Addressing = lazy(
  () => import('@/Pages/MainTabs/Glossary/Networking/TCPIPModel/Internet/IPv4AndIPv6Addressing')
);

const Switching: RouteObject[] = [
  {
    path: '/glossary/networking/tcpipmodel/internet/basics',
    element: <Basics />,
  },
  {
    path: '/glossary/networking/tcpipmodel/internet/ipv4-and-ipv6-addressing',
    element: <IPv4AndIPv6Addressing />,
  },
];

export default Switching;
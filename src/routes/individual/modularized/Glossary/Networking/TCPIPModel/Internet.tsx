import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/Internet/Basics')
);
const IPv4Addressing = lazy(
  () => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/Internet/IPv4Addressing')
);

const IPv6Addressing = lazy(
  () => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/Internet/IPv6Addressing')
);

const Switching: RouteObject[] = [
  {
    path: '/glossary/networking/tcp-ip-model/internet/basics',
    element: <Basics />,
  },
  {
    path: '/glossary/networking/tcp-ip-model/internet/ipv4-addressing',
    element: <IPv4Addressing />,
  },
  {
    path: '/glossary/networking/tcp-ip-model/internet/ipv6-addressing',
    element: <IPv6Addressing />,
  }
];

export default Switching;
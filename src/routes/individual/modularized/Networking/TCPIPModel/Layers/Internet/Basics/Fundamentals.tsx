import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Basics/Fundamentals/Introduction')
);

const DHCP = lazy(
  () => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Basics/Fundamentals/DHCP')
);

const Fundamentals: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/fundamentals/dhcp',
    element: <DHCP />,
  },
];

export default Fundamentals;
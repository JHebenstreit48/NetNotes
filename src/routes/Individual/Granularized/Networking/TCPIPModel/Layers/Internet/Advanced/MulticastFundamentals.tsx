import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IGMPAndMLD = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Advanced/MulticastFundamentals/IGMPAndMLD'));
const PIMSMDM = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Advanced/MulticastFundamentals/PIMSMDM'));

const MulticastFundamentals: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/multicast-fundamentals/igmp-and-mld',
    element: <IGMPAndMLD />,
  },
  {
    path: '/tcpip-model/layers/internet/multicast-fundamentals/pim-sm-dm-concepts',
    element: <PIMSMDM />,
  },
];

export default MulticastFundamentals;

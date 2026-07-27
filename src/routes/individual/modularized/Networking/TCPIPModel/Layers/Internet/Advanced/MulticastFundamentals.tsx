import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IGMPAndMLD = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Advanced/MulticastFundamentals/IGMPAndMLD'));
const PIMSMDM = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Advanced/MulticastFundamentals/PIMSMDM'));

const MulticastFundamentals: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/internet/multicast-fundamentals/igmp-and-mld',
    element: <IGMPAndMLD />,
  },
  {
    path: '/networking/tcp-ip-model/layers/internet/multicast-fundamentals/pim-sm-dm-concepts',
    element: <PIMSMDM />,
  },
];

export default MulticastFundamentals;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LACPAndPAgP = lazy(() => import('@/pages/mainTabs/Networking/Switching/Advanced/EtherChannel/LACPAndPAgP'));
const LoadBalancingAndDesign = lazy(
  () => import('@/pages/mainTabs/Networking/Switching/Advanced/EtherChannel/LoadBalancingAndDesign')
);

const EtherChannel: RouteObject[] = [
  {
    path: '/networking/switching/advanced/etherchannel/lacp-and-pagp',
    element: <LACPAndPAgP />,
  },
  {
    path: '/networking/switching/advanced/etherchannel/load-balancing-and-design',
    element: <LoadBalancingAndDesign />,
  },
];

export default EtherChannel;
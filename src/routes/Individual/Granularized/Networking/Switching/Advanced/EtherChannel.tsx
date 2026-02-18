import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LACPAndPAgP = lazy(() => import('@/Pages/MainTabs/Networking/Switching/Advanced/EtherChannel/LACPAndPAgP'));
const LoadBalancingAndDesign = lazy(
  () => import('@/Pages/MainTabs/Networking/Switching/Advanced/EtherChannel/LoadBalancingAndDesign')
);

const EtherChannel: RouteObject[] = [
  {
    path: '/switching/advanced/etherchannel/lacp-and-pagp',
    element: <LACPAndPAgP />,
  },
  {
    path: '/switching/advanced/etherchannel/load-balancing-and-design',
    element: <LoadBalancingAndDesign />,
  },
];

export default EtherChannel;
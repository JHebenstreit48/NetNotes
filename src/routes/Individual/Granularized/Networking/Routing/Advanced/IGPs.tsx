import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OSPF = lazy(() => import('@/Pages/MainTabs/Networking/Routing/Advanced/IGPs/OSPF'));
const EIGRP = lazy(() => import('@/Pages/MainTabs/Networking/Routing/Advanced/IGPs/EIGRP'));

const IGPs: RouteObject[] = [
  {
    path: '/routing-protocols/advanced/igps/ospf',
    element: <OSPF />,
  },
  {
    path: '/routing-protocols/advanced/igps/eigrp',
    element: <EIGRP />,
  },
];

export default IGPs;

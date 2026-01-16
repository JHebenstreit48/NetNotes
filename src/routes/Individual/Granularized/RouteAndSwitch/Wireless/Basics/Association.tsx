import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DiscoveryAndJoin = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Wireless/Basics/Association/DiscoveryAndJoin'));
const DHCPAndDNSWorkflow = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Wireless/Basics/Association/DHCPAndDNSWorkflow'));

const Association: RouteObject[] = [
  {
    path: '/wireless/basics/association/discovery-and-join',
    element: <DiscoveryAndJoin />,
  },
  {
    path: '/wireless/basics/association/dhcp-and-dns-workflow',
    element: <DHCPAndDNSWorkflow />,
  },
];

export default Association;

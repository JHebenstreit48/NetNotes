import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DiscoveryAndJoin = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Basics/Association/DiscoveryAndJoin'));
const DHCPAndDNSWorkflow = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Basics/Association/DHCPAndDNSWorkflow'));

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

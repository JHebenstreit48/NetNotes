import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InterVLANRouting = lazy(() => import('@/Pages/MainTabs/Networking/Switching/Advanced/VLANs/Routing/InterVLAN'));
const RoAS = lazy(() => import('@/Pages/MainTabs/Networking/Switching/Advanced/VLANs/Routing/RoAS'));

const VLANRouting: RouteObject[] = [
  {
    path: '/switching/advanced/vlans/routing/inter-vlan-routing',
    element: <InterVLANRouting />,
  },
  {
    path: '/switching/advanced/vlans/routing/router-on-a-stick',
    element: <RoAS />,
  },
];

export default VLANRouting;
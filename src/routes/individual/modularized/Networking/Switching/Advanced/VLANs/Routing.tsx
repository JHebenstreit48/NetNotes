import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InterVLANRouting = lazy(() => import('@/pages/mainTabs/Networking/Switching/Advanced/VLANs/Routing/InterVLAN'));
const RoAS = lazy(() => import('@/pages/mainTabs/Networking/Switching/Advanced/VLANs/Routing/RoAS'));

const VLANRouting: RouteObject[] = [
  {
    path: '/networking/switching/advanced/vlans/routing/inter-vlan-routing',
    element: <InterVLANRouting />,
  },
  {
    path: '/networking/switching/advanced/vlans/routing/router-on-a-stick',
    element: <RoAS />,
  },
];

export default VLANRouting;
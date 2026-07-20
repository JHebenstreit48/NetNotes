import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Trunking = lazy(
  () => import('@/Pages/MainTabs/Networking/Switching/Advanced/VLANs/Operations/Trunking')
);
const VTP = lazy(
  () => import('@/Pages/MainTabs/Networking/Switching/Advanced/VLANs/Operations/VTP')
);

const VLANOperations: RouteObject[] = [
  {
    path: '/switching/advanced/vlans/operations/trunking-8021q',
    element: <Trunking />,
  },
  {
    path: '/switching/advanced/vlans/operations/vtp',
    element: <VTP />,
  },
];

export default VLANOperations;
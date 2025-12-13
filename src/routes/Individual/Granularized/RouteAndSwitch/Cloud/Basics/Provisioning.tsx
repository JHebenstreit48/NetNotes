import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ClaimingAndInventory = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Basics/Provisioning/ClaimingAndInventory')
);
const TemplatesAndProfiles = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Basics/Provisioning/TemplatesAndProfiles')
);

const Provisioning: RouteObject[] = [
  {
    path: '/cloud/basics/provisioning/claiming-and-inventory',
    element: <ClaimingAndInventory />,
  },
  {
    path: '/cloud/basics/provisioning/templates-and-profiles',
    element: <TemplatesAndProfiles />,
  },
];

export default Provisioning;
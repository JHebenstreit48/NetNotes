import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ClaimingAndInventory = lazy(
  () => import('@/pages/mainTabs/Networking/Cloud/Basics/Provisioning/ClaimingAndInventory')
);
const TemplatesAndProfiles = lazy(
  () => import('@/pages/mainTabs/Networking/Cloud/Basics/Provisioning/TemplatesAndProfiles')
);

const Provisioning: RouteObject[] = [
  {
    path: '/networking/cloud/basics/provisioning/claiming-and-inventory',
    element: <ClaimingAndInventory />,
  },
  {
    path: '/networking/cloud/basics/provisioning/templates-and-profiles',
    element: <TemplatesAndProfiles />,
  },
];

export default Provisioning;
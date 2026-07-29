import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HoppingMitigation = lazy(
  () => import('@/pages/mainTabs/Networking/Switching/Advanced/VLANs/SecurityAndDesign/HoppingMitigation')
);
const DTPBestPractices = lazy(
  () => import('@/pages/mainTabs/Networking/Switching/Advanced/VLANs/SecurityAndDesign/DTPBestPractices')
);

const VLANSecurityAndDesign: RouteObject[] = [
  {
    path: '/networking/switching/advanced/vlans/security-and-design/vlan-hopping-mitigation',
    element: <HoppingMitigation />,
  },
  {
    path: '/networking/switching/advanced/vlans/security-and-design/dtp-best-practices',
    element: <DTPBestPractices />,
  },
];

export default VLANSecurityAndDesign;
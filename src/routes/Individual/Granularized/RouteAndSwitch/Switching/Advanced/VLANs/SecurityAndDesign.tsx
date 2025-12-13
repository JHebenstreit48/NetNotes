import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HoppingMitigation = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Switching/Advanced/VLANs/SecurityAndDesign/HoppingMitigation')
);
const DTPBestPractices = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Switching/Advanced/VLANs/SecurityAndDesign/DTPBestPractices')
);

const VLANSecurityAndDesign: RouteObject[] = [
  {
    path: '/switching/advanced/vlans/security-and-design/vlan-hopping-mitigation',
    element: <HoppingMitigation />,
  },
  {
    path: '/switching/advanced/vlans/security-and-design/dtp-best-practices',
    element: <DTPBestPractices />,
  },
];

export default VLANSecurityAndDesign;
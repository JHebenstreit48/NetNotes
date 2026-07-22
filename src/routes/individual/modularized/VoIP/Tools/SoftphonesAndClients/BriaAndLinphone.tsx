import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProvisioningAndProfiles = lazy(() => import('@/pages/MainTabs/VoIP/Tools/SoftphonesAndClients/BriaAndLinphone/ProvisioningAndProfiles'));
const Troubleshooting = lazy(() => import('@/pages/MainTabs/VoIP/Tools/SoftphonesAndClients/BriaAndLinphone/Troubleshooting'));

const BriaAndLinphone: RouteObject[] = [
  {
    path: '/tools/softphones/clients/bria-linphone/provisioning',
    element: <ProvisioningAndProfiles />,
  },
  {
    path: '/tools/softphones/clients/bria-linphone/troubleshooting',
    element: <Troubleshooting />,
  },
];

export default BriaAndLinphone;

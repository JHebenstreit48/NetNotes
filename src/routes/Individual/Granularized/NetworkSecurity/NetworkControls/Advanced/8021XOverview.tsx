import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SupplicantAuthenticator = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/NetworkControls/Advanced/8021XOverview/SupplicantAuthenticator'));
const GuestRestrictedVLANs = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/NetworkControls/Advanced/8021XOverview/GuestRestrictedVLANs'));

const 8021XOverview: RouteObject[] = [
  {
    path: '/net-controls/advanced/8021x/supplicant-authenticator',
    element: <SupplicantAuthenticator />,
  },
  {
    path: '/net-controls/advanced/8021x/guest-restricted-vlans',
    element: <GuestRestrictedVLANs />,
  },
];

export default 8021XOverview;

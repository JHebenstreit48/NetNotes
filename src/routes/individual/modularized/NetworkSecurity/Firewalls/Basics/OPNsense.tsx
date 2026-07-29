import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndSetup = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Basics/OPNsense/InstallAndSetup'));
const CoreFirewallConfiguration = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Basics/OPNsense/CoreFirewallConfiguration'));

const OPNsense: RouteObject[] = [
  {
    path: '/network-security/firewalls/basics/opnsense/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/network-security/firewalls/basics/opnsense/core-configuration',
    element: <CoreFirewallConfiguration />,
  },
];

export default OPNsense;

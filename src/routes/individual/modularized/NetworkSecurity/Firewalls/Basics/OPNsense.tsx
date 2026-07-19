import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Basics/OPNsense/InstallAndSetup'));
const CoreFirewallConfiguration = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Basics/OPNsense/CoreFirewallConfiguration'));

const OPNsense: RouteObject[] = [
  {
    path: '/firewalls/basics/opnsense/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/firewalls/basics/opnsense/core-configuration',
    element: <CoreFirewallConfiguration />,
  },
];

export default OPNsense;

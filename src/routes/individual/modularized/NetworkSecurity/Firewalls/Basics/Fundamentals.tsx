import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Basics/Fundamentals/Introduction'));
const TypesOfFirewalls = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Basics/Fundamentals/TypesOfFirewalls'));
const HowFirewallsDecideRules = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Basics/Fundamentals/HowFirewallsDecideRules'));

const OPNsense: RouteObject[] = [
  {
    path: '/network-security/firewalls/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/network-security/firewalls/basics/fundamentals/types-of-firewalls',
    element: <TypesOfFirewalls />,
  },
  {
    path: '/network-security/firewalls/basics/fundamentals/how-firewalls-decide-rules',
    element: <HowFirewallsDecideRules />,
  },
];

export default OPNsense;
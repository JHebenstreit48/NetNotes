import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DesignAndPhases = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/VPNAndTunneling/Advanced/DMVPN/DesignAndPhases'));
const RoutingAndCrypto = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/VPNAndTunneling/Advanced/DMVPN/RoutingAndCrypto'));

const DMVPN: RouteObject[] = [
  {
    path: '/vpn/advanced/dmvpn/design-phases',
    element: <DesignAndPhases />,
  },
  {
    path: '/vpn/advanced/dmvpn/routing-crypto',
    element: <RoutingAndCrypto />,
  },
];

export default DMVPN;

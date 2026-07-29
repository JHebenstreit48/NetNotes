import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TunnelsAndSplitTunnel = lazy(() => import('@/pages/mainTabs/Networking/Cloud/Advanced/Architecture/TunnelsAndSplitTunnel'));
const SiteSSOAndMultiTenant = lazy(() => import('@/pages/mainTabs/Networking/Cloud/Advanced/Architecture/SiteSSOAndMultiTenant'));

const Architecture: RouteObject[] = [
  {
    path: '/networking/cloud/advanced/architecture/tunnels-and-split-tunnel',
    element: <TunnelsAndSplitTunnel />,
  },
  {
    path: '/networking/cloud/advanced/architecture/site-sso-and-multi-tenant',
    element: <SiteSSOAndMultiTenant />,
  },
];

export default Architecture;

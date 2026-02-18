import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TunnelsAndSplitTunnel = lazy(() => import('@/Pages/MainTabs/Networking/Cloud/Advanced/Architecture/TunnelsAndSplitTunnel'));
const SiteSSOAndMultiTenant = lazy(() => import('@/Pages/MainTabs/Networking/Cloud/Advanced/Architecture/SiteSSOAndMultiTenant'));

const Architecture: RouteObject[] = [
  {
    path: '/cloud/advanced/architecture/tunnels-and-split-tunnel',
    element: <TunnelsAndSplitTunnel />,
  },
  {
    path: '/cloud/advanced/architecture/site-sso-and-multi-tenant',
    element: <SiteSSOAndMultiTenant />,
  },
];

export default Architecture;

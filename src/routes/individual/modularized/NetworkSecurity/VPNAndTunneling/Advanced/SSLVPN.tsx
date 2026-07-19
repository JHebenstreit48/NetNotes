import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AnyConnectPortal = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/VPNAndTunneling/Advanced/SSLVPN/AnyConnectPortal'));
const SplitDNSAndBookmarks = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/VPNAndTunneling/Advanced/SSLVPN/SplitDNSAndBookmarks'));

const SSLVPN: RouteObject[] = [
  {
    path: '/vpn/advanced/ssl-vpn/anyconnect-portal',
    element: <AnyConnectPortal />,
  },
  {
    path: '/vpn/advanced/ssl-vpn/split-dns-bookmarks',
    element: <SplitDNSAndBookmarks />,
  },
];

export default SSLVPN;

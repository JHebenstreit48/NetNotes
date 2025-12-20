import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SplitTunneling = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/VPNAndTunneling/Basics/RemoteAccess/SplitTunneling'));
const AuthOptions = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/VPNAndTunneling/Basics/RemoteAccess/AuthOptions'));

const RemoteAccess: RouteObject[] = [
  {
    path: '/vpn/basics/remote-access/split-tunneling',
    element: <SplitTunneling />,
  },
  {
    path: '/vpn/basics/remote-access/auth-options',
    element: <AuthOptions />,
  },
];

export default RemoteAccess;

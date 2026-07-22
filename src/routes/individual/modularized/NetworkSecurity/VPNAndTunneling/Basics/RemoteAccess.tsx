import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SplitTunneling = lazy(() => import('@/pages/mainTabs/NetworkSecurity/VPNAndTunneling/Basics/RemoteAccess/SplitTunneling'));
const AuthOptions = lazy(() => import('@/pages/mainTabs/NetworkSecurity/VPNAndTunneling/Basics/RemoteAccess/AuthOptions'));

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

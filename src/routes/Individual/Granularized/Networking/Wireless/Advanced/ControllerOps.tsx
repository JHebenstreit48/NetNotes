import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WLCBasics = lazy(() => import('@/Pages/MainTabs/Networking/Wireless/Advanced/ControllerOps/WLCBasics'));
const CAPWAPJoinAndTunnel = lazy(() => import('@/Pages/MainTabs/Networking/Wireless/Advanced/ControllerOps/CAPWAPJoinAndTunnel'));

const ControllerOps: RouteObject[] = [
  {
    path: '/wireless/advanced/controller/wlc-basics',
    element: <WLCBasics />,
  },
  {
    path: '/wireless/advanced/controller/capwap-join-and-tunnel',
    element: <CAPWAPJoinAndTunnel />,
  },
];

export default ControllerOps;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SSH = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Advanced/RemoteAccess/SSH'));
const BestPractices = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Advanced/RemoteAccess/BestPractices'));

const RemoteAccess: RouteObject[] = [
  {
    path: '/tcpip-model/layers/application/advanced/remote-access/ssh',
    element: <SSH />,
  },
  {
    path: '/tcpip-model/layers/application/advanced/remote-access/ssh-best-practices',
    element: <BestPractices />,
  },
];

export default RemoteAccess;

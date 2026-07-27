import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SSH = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Application/Advanced/RemoteAccess/SSH'));
const BestPractices = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Application/Advanced/RemoteAccess/BestPractices'));

const RemoteAccess: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/application/advanced/remote-access/ssh',
    element: <SSH />,
  },
  {
    path: '/networking/tcp-ip-model/layers/application/advanced/remote-access/ssh-best-practices',
    element: <BestPractices />,
  },
];

export default RemoteAccess;

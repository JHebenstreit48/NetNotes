import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/Internet/Basics')
);
const Addressing = lazy(
  () => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/Internet/Addressing')
);

const Internet: RouteObject[] = [
  {
    path: '/glossary/networking/tcp-ip-model/internet/basics',
    element: <Basics />,
  },
   {
      path: '/glossary/networking/tcp-ip-model/internet/addressing',
      element: <Addressing />,
    },
    {
      path: '/glossary/networking/tcp-ip-model/internet/nat-and-pat',
    },
    {
      path: '/glossary/networking/tcp-ip-model/internet/qos-and-fragmentation',
    },
    {
      path: '/glossary/networking/tcp-ip-model/internet/commands',
    }

];

export default Internet;
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/Application/Basics'));
const WebAndDNS = lazy(() => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/Application/WebAndDNS'));
const Messaging = lazy(() => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/Application/Messaging'));

const Application: RouteObject[] = [
  {
    path: '/glossary/networking/tcp-ip-model/application/basics',
    element: <Basics />,
  },
  {
    path: '/glossary/networking/tcp-ip-model/application/web-and-dns',
    element: <WebAndDNS />,
  },
  {
    path: '/glossary/networking/tcp-ip-model/application/messaging',
    element: <Messaging />,
  }
];

export default Application;
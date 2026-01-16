import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const POP3Overview = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics/POP3/POP3Overview'));
const POP3VsIMAP = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics/POP3/POP3VsIMAP'));

const POP3: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/pop3/overview',
    element: <POP3Overview />,
  },
  {
    path: '/legacy/protocols-and-statuses/pop3/pop3-vs-imap',
    element: <POP3VsIMAP />,
  },
];

export default POP3;

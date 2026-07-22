import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Basics/POP3/Introduction'));
const POP3VsIMAP = lazy(() => import('@/pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Basics/POP3/POP3VsIMAP'));

const POP3: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/basics/pop3/introduction',
    element: <Introduction />,
  },
  {
    path: '/legacy/protocols-and-statuses/basics/pop3/pop3-vs-imap',
    element: <POP3VsIMAP />,
  },
];

export default POP3;

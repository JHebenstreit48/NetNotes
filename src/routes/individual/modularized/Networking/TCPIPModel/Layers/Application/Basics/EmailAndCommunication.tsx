import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SMTP = lazy(() => import('@/pages/MainTabs/Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/SMTP'));
const IMAP = lazy(() => import('@/pages/MainTabs/Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/IMAP'));
const TextMessaging = lazy(() => import('@/pages/MainTabs/Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/TextMessaging'));

const EmailAndCommunication: RouteObject[] = [
  {
    path: '/tcpip-model/layers/application/basics/email-and-communication/smtp',
    element: <SMTP />,
  },
  {
    path: '/tcpip-model/layers/application/basics/email-and-communication/imap',
    element: <IMAP />,
  },
  {
    path: '/tcpip-model/layers/application/basics/email-and-communication/text-messaging',
    element: <TextMessaging />,
  }
];

export default EmailAndCommunication;
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SMTP = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/SMTP'));
const IMAP = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/IMAP'));
const TextMessaging = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/TextMessaging'));

const EmailAndCommunication: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/application/basics/email-and-communication/smtp',
    element: <SMTP />,
  },
  {
    path: '/networking/tcp-ip-model/layers/application/basics/email-and-communication/imap',
    element: <IMAP />,
  },
  {
    path: '/networking/tcp-ip-model/layers/application/basics/email-and-communication/text-messaging',
    element: <TextMessaging />,
  }
];

export default EmailAndCommunication;
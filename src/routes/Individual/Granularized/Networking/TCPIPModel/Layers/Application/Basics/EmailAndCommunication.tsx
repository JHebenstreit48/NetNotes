import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SMTP = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/SMTP'));
const IMAP = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/IMAP'));

const EmailAndCommunication: RouteObject[] = [
  {
    path: '/tcpip-model/layers/application/basics/email-and-communication/smtp',
    element: <SMTP />,
  },
  {
    path: '/tcpip-model/layers/application/basics/email-and-communication/imap',
    element: <IMAP />,
  },
];

export default EmailAndCommunication;

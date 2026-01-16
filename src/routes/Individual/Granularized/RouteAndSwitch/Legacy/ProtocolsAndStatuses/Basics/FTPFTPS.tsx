import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FTPVsFTPS = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics/FTPFTPS/FTPVsFTPS'));
const ActiveVsPassive = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics/FTPFTPS/ActiveVsPassive'));

const FTPFTPS: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/ftp-ftps/ftp-vs-ftps',
    element: <FTPVsFTPS />,
  },
  {
    path: '/legacy/protocols-and-statuses/ftp-ftps/active-vs-passive',
    element: <ActiveVsPassive />,
  },
];

export default FTPFTPS;

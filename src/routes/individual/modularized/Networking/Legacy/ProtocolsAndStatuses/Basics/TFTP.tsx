import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TFTPBasics = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Basics/TFTP/TFTPBasics'));
const UseCasesAndLimits = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Basics/TFTP/UseCasesAndLimits'));

const TFTP: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/tftp/basics',
    element: <TFTPBasics />,
  },
  {
    path: '/legacy/protocols-and-statuses/tftp/use-cases-and-limits',
    element: <UseCasesAndLimits />,
  },
];

export default TFTP;

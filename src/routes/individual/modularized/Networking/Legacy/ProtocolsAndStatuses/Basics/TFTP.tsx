import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Basics/TFTP/Introduction'));
const UseCasesAndLimits = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Basics/TFTP/UseCasesAndLimits'));

const TFTP: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/tftp/introduction',
    element: <Introduction />,
  },
  {
    path: '/legacy/protocols-and-statuses/tftp/use-cases-and-limits',
    element: <UseCasesAndLimits />,
  },
];

export default TFTP;

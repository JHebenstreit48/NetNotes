import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DialogAndTokens = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/OSIModel/Basics/Session/DialogAndTokens'));
const SyncAndRecovery = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/OSIModel/Basics/Session/SyncAndRecovery'));

const Session: RouteObject[] = [
  {
    path: '/coreconcepts/osimodel/basics/session/dialog-and-tokens',
    element: <DialogAndTokens />,
  },
  {
    path: '/coreconcepts/osimodel/basics/session/sync-and-recovery',
    element: <SyncAndRecovery />,
  },
];

export default Session;

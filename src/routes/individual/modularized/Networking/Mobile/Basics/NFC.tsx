import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/NFC/Introduction'));
const CommonUses = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/NFC/CommonUses'));

const NFC: RouteObject[] = [
  {
    path: '/mobile/basics/nfc/introduction',
    element: <Introduction />,
  },
  {
    path: '/mobile/basics/nfc/common-uses',
    element: <CommonUses />,
  },
];

export default NFC;

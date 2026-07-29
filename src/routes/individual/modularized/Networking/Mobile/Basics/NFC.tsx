import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/NFC/Introduction'));
const CommonUses = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/NFC/CommonUses'));

const NFC: RouteObject[] = [
  {
    path: '/networking/mobile/basics/nfc/introduction',
    element: <Introduction />,
  },
  {
    path: '/networking/mobile/basics/nfc/common-uses',
    element: <CommonUses />,
  },
];

export default NFC;

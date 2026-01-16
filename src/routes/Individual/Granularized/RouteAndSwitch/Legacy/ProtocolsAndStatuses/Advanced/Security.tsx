import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CleartextRisks = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced/Security/CleartextRisks'));
const AAAAndBanners = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced/Security/AAAAndBanners'));

const Security: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/advanced/security-legacy/cleartext-risks',
    element: <CleartextRisks />,
  },
  {
    path: '/legacy/protocols-and-statuses/advanced/security-legacy/aaa-and-banners',
    element: <AAAAndBanners />,
  },
];

export default Security;

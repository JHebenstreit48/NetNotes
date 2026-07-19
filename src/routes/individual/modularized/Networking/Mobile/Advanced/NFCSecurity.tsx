import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RisksAndBestPractices = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Advanced/NFCSecurity/RisksAndBestPractices'));
const PaymentsAndSecureElement = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Advanced/NFCSecurity/PaymentsAndSecureElement'));

const NFCSecurity: RouteObject[] = [
  {
    path: '/mobile/advanced/nfc-security/risks-and-best-practices',
    element: <RisksAndBestPractices />,
  },
  {
    path: '/mobile/advanced/nfc-security/payments-and-secure-element',
    element: <PaymentsAndSecureElement />,
  },
];

export default NFCSecurity;

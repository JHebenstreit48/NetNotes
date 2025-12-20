import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AccountingAndCommandAuthorization = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/AccessControl/Advanced/BestPractices/AccountingAndCommandAuthorization'));
const HAAndFallbackStrategies = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/AccessControl/Advanced/BestPractices/HAAndFallbackStrategies'));

const BestPractices: RouteObject[] = [
  {
    path: '/access/advanced/best-practices/accounting-authorization',
    element: <AccountingAndCommandAuthorization />,
  },
  {
    path: '/access/advanced/best-practices/ha-fallback',
    element: <HAAndFallbackStrategies />,
  },
];

export default BestPractices;

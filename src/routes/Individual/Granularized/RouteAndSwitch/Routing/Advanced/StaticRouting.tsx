import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ConfigurationAndUseCases = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Routing/Advanced/StaticRouting/ConfigurationAndUseCases'));
const TroubleshootingAndBestPractices = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Routing/Advanced/StaticRouting/TroubleshootingAndBestPractices'));

const StaticRouting: RouteObject[] = [
  {
    path: '/routing-protocols/advanced/static-routing/configuration-and-use-cases',
    element: <ConfigurationAndUseCases />,
  },
  {
    path: '/routing-protocols/advanced/static-routing/troubleshooting-and-best-practices',
    element: <TroubleshootingAndBestPractices />,
  },
];

export default StaticRouting;

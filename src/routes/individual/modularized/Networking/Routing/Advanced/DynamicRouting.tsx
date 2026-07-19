import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MetricsAndDecisionMaking = lazy(() => import('@/Pages/MainTabs/Networking/Routing/Advanced/DynamicRouting/MetricsAndDecisionMaking'));
const ConfigurationScenarios = lazy(() => import('@/Pages/MainTabs/Networking/Routing/Advanced/DynamicRouting/ConfigurationScenarios'));

const DynamicRouting: RouteObject[] = [
  {
    path: '/routing-protocols/advanced/dynamic-routing/metrics-and-decision-making',
    element: <MetricsAndDecisionMaking />,
  },
  {
    path: '/routing-protocols/advanced/dynamic-routing/configuration-scenarios',
    element: <ConfigurationScenarios />,
  },
];

export default DynamicRouting;

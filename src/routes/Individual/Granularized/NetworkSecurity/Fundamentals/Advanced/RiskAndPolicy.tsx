import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RiskScoringAndAppetite = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Fundamentals/Advanced/RiskAndPolicy/RiskScoringAndAppetite'));
const PolicyFrameworks = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Fundamentals/Advanced/RiskAndPolicy/PolicyFrameworks'));

const RiskAndPolicy: RouteObject[] = [
  {
    path: '/fundamentals/advanced/risk-policy/risk-scoring-appetite',
    element: <RiskScoringAndAppetite />,
  },
  {
    path: '/fundamentals/advanced/risk-policy/policy-frameworks',
    element: <PolicyFrameworks />,
  },
];

export default RiskAndPolicy;

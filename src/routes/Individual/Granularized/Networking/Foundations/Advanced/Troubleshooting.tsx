import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MethodologyAndFlow = lazy(() => import('@/Pages/MainTabs/Networking/Foundations/Advanced/Troubleshooting/MethodologyAndFlow'));
const BaselinesAndMonitoring = lazy(() => import('@/Pages/MainTabs/Networking/Foundations/Advanced/Troubleshooting/BaselinesAndMonitoring'));

const Troubleshooting: RouteObject[] = [
  {
    path: '/foundations/advanced/troubleshooting/methodology-and-flow',
    element: <MethodologyAndFlow />,
  },
  {
    path: '/foundations/advanced/troubleshooting/baselines-and-monitoring',
    element: <BaselinesAndMonitoring />,
  },
];

export default Troubleshooting;

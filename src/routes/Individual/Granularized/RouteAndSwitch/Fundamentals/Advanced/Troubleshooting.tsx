import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MethodologyAndFlow = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Advanced/Troubleshooting/MethodologyAndFlow'));
const BaselinesAndMonitoring = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Advanced/Troubleshooting/BaselinesAndMonitoring'));

const Troubleshooting: RouteObject[] = [
  {
    path: '/fundamentals/advanced/troubleshooting/methodology-and-flow',
    element: <MethodologyAndFlow />,
  },
  {
    path: '/fundamentals/advanced/troubleshooting/baselines-and-monitoring',
    element: <BaselinesAndMonitoring />,
  },
];

export default Troubleshooting;

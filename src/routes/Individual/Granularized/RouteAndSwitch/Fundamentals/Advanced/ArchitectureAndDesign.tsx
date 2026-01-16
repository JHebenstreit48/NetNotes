import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreDistributionAccess = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Advanced/ArchitectureAndDesign/CoreDistributionAccess'));
const SpineLeaf = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Advanced/ArchitectureAndDesign/SpineLeaf'));

const ArchitectureAndDesign: RouteObject[] = [
  {
    path: '/fundamentals/advanced/architecture-and-design/core-distribution-access',
    element: <CoreDistributionAccess />,
  },
  {
    path: '/fundamentals/advanced/architecture-and-design/spine-leaf',
    element: <SpineLeaf />,
  },
];

export default ArchitectureAndDesign;

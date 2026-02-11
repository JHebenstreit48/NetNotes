import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreDistributionAccess = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Foundations/Advanced/ArchitectureAndDesign/CoreDistributionAccess'));
const SpineLeaf = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Foundations/Advanced/ArchitectureAndDesign/SpineLeaf'));

const ArchitectureAndDesign: RouteObject[] = [
  {
    path: '/foundations/advanced/architecture-and-design/core-distribution-access',
    element: <CoreDistributionAccess />,
  },
  {
    path: '/foundations/advanced/architecture-and-design/spine-leaf',
    element: <SpineLeaf />,
  },
];

export default ArchitectureAndDesign;

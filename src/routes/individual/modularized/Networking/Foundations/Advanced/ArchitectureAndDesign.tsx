import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreDistributionAccess = lazy(() => import('@/pages/mainTabs/Networking/Foundations/Advanced/ArchitectureAndDesign/CoreDistributionAccess'));
const SpineLeaf = lazy(() => import('@/pages/mainTabs/Networking/Foundations/Advanced/ArchitectureAndDesign/SpineLeaf'));

const ArchitectureAndDesign: RouteObject[] = [
  {
    path: '/networking/foundations/advanced/architecture-and-design/core-distribution-access',
    element: <CoreDistributionAccess />,
  },
  {
    path: '/networking/foundations/advanced/architecture-and-design/spine-leaf',
    element: <SpineLeaf />,
  },
];

export default ArchitectureAndDesign;

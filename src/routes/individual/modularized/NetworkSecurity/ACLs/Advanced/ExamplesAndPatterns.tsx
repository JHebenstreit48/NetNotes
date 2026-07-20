import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Examples = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Advanced/ExamplesAndPatterns/Examples'));
const PlacementAndTesting = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Advanced/ExamplesAndPatterns/PlacementAndTesting'));

const ExamplesAndPatterns: RouteObject[] = [
  {
    path: '/acls/advanced/examples/combined',
    element: <Examples />,
  },
  {
    path: '/acls/advanced/examples/placement-testing',
    element: <PlacementAndTesting />,
  },
];

export default ExamplesAndPatterns;

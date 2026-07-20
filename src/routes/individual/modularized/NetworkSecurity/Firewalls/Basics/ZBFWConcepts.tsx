import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ZonesAndZonePairs = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Basics/ZBFWConcepts/ZonesAndZonePairs'));
const ClassMapsAndPolicyMaps = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Basics/ZBFWConcepts/ClassMapsAndPolicyMaps'));

const ZBFWConcepts: RouteObject[] = [
  {
    path: '/firewalls/basics/zbfw/zones-and-zone-pairs',
    element: <ZonesAndZonePairs />,
  },
  {
    path: '/firewalls/basics/zbfw/classmaps-policymaps',
    element: <ClassMapsAndPolicyMaps />,
  },
];

export default ZBFWConcepts;

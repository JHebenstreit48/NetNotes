import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DomainBreakdown = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/ObjectiveMap/DomainBreakdown'));
const LinkMapToNotes = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/ObjectiveMap/LinkMapToNotes'));

const ObjectiveMap: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/basics/objective-map/domain-breakdown',
    element: <DomainBreakdown />,
  },
  {
    path: '/certifications/cisco/ccna/basics/objective-map/link-map-to-notes',
    element: <LinkMapToNotes />,
  },
];

export default ObjectiveMap;

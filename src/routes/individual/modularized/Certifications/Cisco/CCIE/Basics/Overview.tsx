import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WhatIsCCIE = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCIE/Basics/Overview/WhatIsCCIE'));
const PathsAndPrereqs = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCIE/Basics/Overview/PathsAndPrereqs'));

const Overview: RouteObject[] = [
  {
    path: '/certifications/cisco/ccie/basics/overview/what-is-ccie',
    element: <WhatIsCCIE />,
  },
  {
    path: '/certifications/cisco/ccie/basics/overview/paths-and-prereqs',
    element: <PathsAndPrereqs />,
  },
];

export default Overview;

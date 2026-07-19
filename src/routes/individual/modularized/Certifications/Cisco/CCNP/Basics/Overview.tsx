import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WhatIsTheCCNP = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Basics/Overview/WhatIsTheCCNP'));
const TracksAndPrerequisites = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Basics/Overview/TracksAndPrerequisites'));

const Overview: RouteObject[] = [
  {
    path: '/certifications/cisco/ccnp/basics/overview/what-is-the-ccnp',
    element: <WhatIsTheCCNP />,
  },
  {
    path: '/certifications/cisco/ccnp/basics/overview/tracks-and-prerequisites',
    element: <TracksAndPrerequisites />,
  },
];

export default Overview;

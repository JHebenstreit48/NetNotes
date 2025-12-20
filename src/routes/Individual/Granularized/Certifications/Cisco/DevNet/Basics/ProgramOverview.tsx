import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WhatIsDevNet = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Basics/ProgramOverview/WhatIsDevNet'));
const PathsAndPrereqs = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Basics/ProgramOverview/PathsAndPrereqs'));

const ProgramOverview: RouteObject[] = [
  {
    path: '/certifications/cisco/devnet/basics/program-overview/what-is-devnet',
    element: <WhatIsDevNet />,
  },
  {
    path: '/certifications/cisco/devnet/basics/program-overview/paths-and-prereqs',
    element: <PathsAndPrereqs />,
  },
];

export default ProgramOverview;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DEVCOROverview = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Basics/Professional/DEVCOROverview'));
const ConcentrationOptions = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Basics/Professional/ConcentrationOptions'));

const Professional: RouteObject[] = [
  {
    path: '/certifications/cisco/devnet/basics/professional/devcor-overview',
    element: <DEVCOROverview />,
  },
  {
    path: '/certifications/cisco/devnet/basics/professional/concentration-options',
    element: <ConcentrationOptions />,
  },
];

export default Professional;

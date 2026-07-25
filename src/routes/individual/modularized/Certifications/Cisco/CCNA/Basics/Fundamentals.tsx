import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCNA/Basics/Fundamentals/Introduction'));
const PoliciesAndRegistration = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCNA/Basics/Fundamentals/PoliciesAndRegistration'));

const Fundamentals: RouteObject[] = [
  {
    path: '/cisco/ccna/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/cisco/ccna/basics/fundamentals/policies-and-registration',
    element: <PoliciesAndRegistration />,
  },
];

export default Fundamentals;

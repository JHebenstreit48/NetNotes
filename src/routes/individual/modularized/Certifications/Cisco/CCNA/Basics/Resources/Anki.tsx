import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCNA/Basics/Resources/Anki/Introduction'));

const Anki: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/basics/resources/anki/introduction',
    element: <Introduction />,
  },
];

export default Anki;
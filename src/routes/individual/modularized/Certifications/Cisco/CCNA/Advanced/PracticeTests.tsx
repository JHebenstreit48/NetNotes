import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Boson = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/PracticeTests/Boson'));
const MeasureUp = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/PracticeTests/MeasureUp'));

const PracticeTests: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/advanced/practice-tests/boson',
    element: <Boson />,
  },
  {
    path: '/certifications/cisco/ccna/advanced/practice-tests/measureup',
    element: <MeasureUp />,
  },
];

export default PracticeTests;

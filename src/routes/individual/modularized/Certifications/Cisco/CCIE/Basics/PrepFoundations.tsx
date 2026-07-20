import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StudyPlan = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Basics/PrepFoundations/StudyPlan'));
const ToolsAndEnvironment = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Basics/PrepFoundations/ToolsAndEnvironment'));

const PrepFoundations: RouteObject[] = [
  {
    path: '/certifications/cisco/ccie/basics/prep-foundations/study-plan',
    element: <StudyPlan />,
  },
  {
    path: '/certifications/cisco/ccie/basics/prep-foundations/tools-and-environment',
    element: <ToolsAndEnvironment />,
  },
];

export default PrepFoundations;

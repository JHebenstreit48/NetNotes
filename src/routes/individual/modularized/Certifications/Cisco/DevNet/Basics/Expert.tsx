import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExamOverview = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/DevNet/Basics/Expert/ExamOverview'));
const LabBlueprint = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/DevNet/Basics/Expert/LabBlueprint'));

const Expert: RouteObject[] = [
  {
    path: '/certifications/cisco/devnet/basics/expert/exam-overview',
    element: <ExamOverview />,
  },
  {
    path: '/certifications/cisco/devnet/basics/expert/lab-blueprint',
    element: <LabBlueprint />,
  },
];

export default Expert;

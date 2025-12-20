import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AssociateTimedMock = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Advanced/MockExams/AssociateTimedMock'));
const DEVCORTimedMock = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Advanced/MockExams/DEVCORTimedMock'));

const MockExams: RouteObject[] = [
  {
    path: '/certifications/cisco/devnet/advanced/mock-exams/associate-timed-mock',
    element: <AssociateTimedMock />,
  },
  {
    path: '/certifications/cisco/devnet/advanced/mock-exams/devcor-timed-mock',
    element: <DEVCORTimedMock />,
  },
];

export default MockExams;

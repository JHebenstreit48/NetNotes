import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WhatIsSecurity = lazy(() => import('@/pages/mainTabs/Certifications/CompTIA/CompTIASecurity/Overview/WhatIsSecurity'));
const SecurityExamFormat = lazy(() => import('@/pages/mainTabs/Certifications/CompTIA/CompTIASecurity/Overview/SecurityExamFormat'));

const Overview: RouteObject[] = [
  {
    path: '/certifications/comptia/securityplus/overview',
    element: <WhatIsSecurity />,
  },
  {
    path: '/certifications/comptia/securityplus/exam-format',
    element: <SecurityExamFormat />,
  },
];

export default Overview;

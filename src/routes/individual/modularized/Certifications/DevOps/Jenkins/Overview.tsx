import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WhatIsTheCJE = lazy(() => import('@/pages/MainTabs/Certifications/DevOps/Jenkins/Overview/WhatIsTheCJE'));
const SkillsMeasured = lazy(() => import('@/pages/MainTabs/Certifications/DevOps/Jenkins/Overview/SkillsMeasured'));

const Overview: RouteObject[] = [
  {
    path: '/certifications/devops/jenkins/overview',
    element: <WhatIsTheCJE />,
  },
  {
    path: '/certifications/devops/jenkins/domains',
    element: <SkillsMeasured />,
  },
];

export default Overview;

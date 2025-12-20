import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StudyMethods = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Basics/PlanningAndStudy/StudyMethods'));
const TimelineAndMilestones = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Basics/PlanningAndStudy/TimelineAndMilestones'));

const PlanningAndStudy: RouteObject[] = [
  {
    path: '/certifications/cisco/ccnp/basics/planning-and-study/study-methods',
    element: <StudyMethods />,
  },
  {
    path: '/certifications/cisco/ccnp/basics/planning-and-study/timeline-and-milestones',
    element: <TimelineAndMilestones />,
  },
];

export default PlanningAndStudy;

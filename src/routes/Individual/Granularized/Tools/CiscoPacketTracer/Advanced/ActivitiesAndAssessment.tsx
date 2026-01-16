import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ActivityWizard = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Advanced/ActivitiesAndAssessment/ActivityWizard'));
const GradingAndFeedback = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Advanced/ActivitiesAndAssessment/GradingAndFeedback'));

const ActivitiesAndAssessment: RouteObject[] = [
  {
    path: '/packettracer/advanced/activities-and-assessment/activity-wizard',
    element: <ActivityWizard />,
  },
  {
    path: '/packettracer/advanced/activities-and-assessment/grading-and-feedback',
    element: <GradingAndFeedback />,
  },
];

export default ActivitiesAndAssessment;

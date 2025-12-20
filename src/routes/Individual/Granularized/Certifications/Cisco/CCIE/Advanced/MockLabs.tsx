import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TimedMock = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Advanced/MockLabs/TimedMock'));
const TaskReviewAndNotes = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Advanced/MockLabs/TaskReviewAndNotes'));

const MockLabs: RouteObject[] = [
  {
    path: '/certifications/cisco/ccie/advanced/mock-labs/timed-mock',
    element: <TimedMock />,
  },
  {
    path: '/certifications/cisco/ccie/advanced/mock-labs/task-review-and-notes',
    element: <TaskReviewAndNotes />,
  },
];

export default MockLabs;

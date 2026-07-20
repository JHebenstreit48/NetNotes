import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ActiveRecallAndLabs = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/StudyMethods/ActiveRecallAndLabs'));
const PomodoroAndSpacedRepetition = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/StudyMethods/PomodoroAndSpacedRepetition'));

const StudyMethods: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/basics/study-methods/active-recall-and-labs',
    element: <ActiveRecallAndLabs />,
  },
  {
    path: '/certifications/cisco/ccna/basics/study-methods/pomodoro-and-spaced-repetition',
    element: <PomodoroAndSpacedRepetition />,
  },
];

export default StudyMethods;

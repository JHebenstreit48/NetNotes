import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Flashcards = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/Resources/Flashcards'));
const StudyTemplates = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/Resources/StudyTemplates'));

const Resources: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/basics/resources/flashcards-anki-quizlet',
    element: <Flashcards />,
  },
  {
    path: '/certifications/cisco/ccna/basics/resources/study-templates',
    element: <StudyTemplates />,
  },
];

export default Resources;

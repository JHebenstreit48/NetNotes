import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RecommendedStudyMaterials = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCNA/Basics/Resources/StudyMaterials/RecommendedStudyMaterials'));
const StudyTemplates = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCNA/Basics/Resources/StudyMaterials/StudyTemplates'));

const StudyMaterials: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/basics/resources/study-materials/recommended-study-materials',
    element: <RecommendedStudyMaterials />,
  },
  {
    path: '/certifications/cisco/ccna/basics/resources/study-materials/study-templates',
    element: <StudyTemplates />,
  },
];

export default StudyMaterials;
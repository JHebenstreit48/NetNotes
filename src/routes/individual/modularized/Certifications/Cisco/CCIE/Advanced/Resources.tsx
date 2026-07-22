import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BooksAndCourses = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCIE/Advanced/Resources/BooksAndCourses'));
const PracticeLabsAndRacks = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCIE/Advanced/Resources/PracticeLabsAndRacks'));

const Resources: RouteObject[] = [
  {
    path: '/certifications/cisco/ccie/advanced/resources/books-and-courses',
    element: <BooksAndCourses />,
  },
  {
    path: '/certifications/cisco/ccie/advanced/resources/practice-labs-and-racks',
    element: <PracticeLabsAndRacks />,
  },
];

export default Resources;

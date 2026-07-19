import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BooksAndCourses = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Advanced/Resources/BooksAndCourses'));
const OfficialDocsAndBlueprints = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Advanced/Resources/OfficialDocsAndBlueprints'));

const Resources: RouteObject[] = [
  {
    path: '/certifications/cisco/ccnp/advanced/resources/books-and-courses',
    element: <BooksAndCourses />,
  },
  {
    path: '/certifications/cisco/ccnp/advanced/resources/official-docs-and-blueprints',
    element: <OfficialDocsAndBlueprints />,
  },
];

export default Resources;

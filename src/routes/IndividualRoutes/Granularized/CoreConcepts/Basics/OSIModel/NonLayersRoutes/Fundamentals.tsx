import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/OSIModel/Fundamentals/Overview')
);
const Characteristics = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/OSIModel/Fundamentals/ModelCharacteristics')
);
const CertificationUse = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/OSIModel/Fundamentals/Certifications')
);

const Fundamentals: RouteObject[] = [
    {
        path: '/coreconcepts/basics/osimodel/fundamentals/overview',
        element: <Overview />,
    },
    {
        path: '/coreconcepts/basics/osimodel/fundamentals/characteristics',
        element: <Characteristics />,
    },
    {
      path: '/coreconcepts/basics/osimodel/fundamentals/certificationusage',
      element: <CertificationUse />,
    }
];

export default Fundamentals;
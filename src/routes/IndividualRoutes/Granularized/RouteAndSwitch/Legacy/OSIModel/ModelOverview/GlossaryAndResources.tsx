import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Glossary = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/OSIModel/GlossaryAndResources/Glossary')
);
const Resources = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/OSIModel/GlossaryAndResources/Resources')
);

const GlossaryAndResources: RouteObject[] = [
  {
    path: '/coreconcepts/basics/osimodel/glossaryandresources/glossary',
    element: <Glossary />,
  },
  {
    path: '/coreconcepts/basics/osimodel/glossaryandresources/resources',
    element: <Resources />,
  },
];

export default GlossaryAndResources;
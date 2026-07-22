import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Glossary = lazy(() => import('@/pages/mainTabs/Networking/Legacy/OSIModel/Basics/GlossaryResources/Glossary'));
const Resources = lazy(() => import('@/pages/mainTabs/Networking/Legacy/OSIModel/Basics/GlossaryResources/Resources'));

const GlossaryResources: RouteObject[] = [
  {
    path: '/coreconcepts/basics/osimodel/glossaryandresources/glossary',
    element: <Glossary />,
  },
  {
    path: '/coreconcepts/basics/osimodel/glossaryandresources/resources',
    element: <Resources />,
  },
];

export default GlossaryResources;

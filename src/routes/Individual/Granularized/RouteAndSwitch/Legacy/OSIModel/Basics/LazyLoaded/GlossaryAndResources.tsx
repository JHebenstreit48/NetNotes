import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Glossary = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/OSIModel/GlossaryAndResources/Glossary')
);
const Resources = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/OSIModel/GlossaryAndResources/Resources')
);

const GlossaryAndResources: RouteObject[] = [
  {
    path: '/legacy/basics/osimodel/glossaryandresources/glossary',
    element: <Glossary />,
  },
  {
    path: '/legacy/basics/osimodel/glossaryandresources/resources',
    element: <Resources />,
  },
];

export default GlossaryAndResources;
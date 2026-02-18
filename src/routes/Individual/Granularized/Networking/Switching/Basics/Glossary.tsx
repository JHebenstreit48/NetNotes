import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HostsAndPorts = lazy(
  () => import('@/Pages/MainTabs/Networking/Switching/Basics/Glossary/HostsAndPorts')
);
const L2ConceptsAndArchitecture = lazy(
  () => import('@/Pages/MainTabs/Networking/Switching/Basics/Glossary/L2ConceptsAndArchitecture')
);

const Glossary: RouteObject[] = [
  {
    path: '/switching/basics/glossary/hosts-and-ports',
    element: <HostsAndPorts />,
  },
  {
    path: '/switching/basics/glossary/l2-concepts-and-architecture',
    element: <L2ConceptsAndArchitecture />,
  },
];

export default Glossary;
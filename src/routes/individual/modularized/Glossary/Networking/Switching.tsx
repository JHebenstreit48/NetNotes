import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HostsAndPorts = lazy(
  () => import('@/Pages/MainTabs/Glossary/Networking/Switching/HostsAndPorts')
);
const L2ConceptsAndArchitecture = lazy(
  () => import('@/Pages/MainTabs/Glossary/Networking/Switching/L2ConceptsAndArchitecture')
);

const Switching: RouteObject[] = [
  {
    path: '/glossary/networking/switching/hosts-and-ports',
    element: <HostsAndPorts />,
  },
  {
    path: '/glossary/networking/switching/l2-concepts-and-architecture',
    element: <L2ConceptsAndArchitecture />,
  },
];

export default Switching;
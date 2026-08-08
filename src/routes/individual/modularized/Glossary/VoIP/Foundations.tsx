import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreProtocols = lazy(
  () => import('@/pages/mainTabs/Glossary/Networking/Switching/HostsAndPorts')
);

const Foundations: RouteObject[] = [
  {
    path: '/glossary/voip/foundations/core-protocols',
    element: <CoreProtocols />,
  },
];

export default Foundations;
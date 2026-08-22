import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CLIAndCommands = lazy(
  () => import('@/pages/mainTabs/Glossary/Networking/Foundations/Fundamentals/CLIAndCommands')
);

const Fundamentals: RouteObject[] = [
  {
    path: '/glossary/networking/foundations/fundamentals/cli-and-commands',
    element: <CLIAndCommands />,
  }
];

export default Fundamentals;
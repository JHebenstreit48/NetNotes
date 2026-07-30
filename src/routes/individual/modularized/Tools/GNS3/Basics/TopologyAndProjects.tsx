import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NodesAndLinks = lazy(() => import('@/pages/mainTabs/Tools/GNS3/Basics/TopologyAndProjects/NodesAndLinks'));
const ProjectsAndSnapshots = lazy(() => import('@/pages/mainTabs/Tools/GNS3/Basics/TopologyAndProjects/ProjectsAndSnapshots'));

const TopologyAndProjects: RouteObject[] = [
  {
    path: '/tools/gns3/basics/topology-and-projects/nodes-and-links',
    element: <NodesAndLinks />,
  },
  {
    path: '/tools/gns3/basics/topology-and-projects/projects-and-snapshots',
    element: <ProjectsAndSnapshots />,
  },
];

export default TopologyAndProjects;

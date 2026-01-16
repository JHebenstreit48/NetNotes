import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NodesAndLinks = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Basics/TopologyAndProjects/NodesAndLinks'));
const ProjectsAndSnapshots = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Basics/TopologyAndProjects/ProjectsAndSnapshots'));

const TopologyAndProjects: RouteObject[] = [
  {
    path: '/gns3/basics/topology-and-projects/nodes-and-links',
    element: <NodesAndLinks />,
  },
  {
    path: '/gns3/basics/topology-and-projects/projects-and-snapshots',
    element: <ProjectsAndSnapshots />,
  },
];

export default TopologyAndProjects;

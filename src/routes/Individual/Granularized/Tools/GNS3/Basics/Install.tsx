import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GNS3AppAndVM = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Basics/Install/GNS3AppAndVM'));
const RequirementsAndSetup = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Basics/Install/RequirementsAndSetup'));

const Install: RouteObject[] = [
  {
    path: '/gns3/basics/install/gns3-app-and-vm',
    element: <GNS3AppAndVM />,
  },
  {
    path: '/gns3/basics/install/requirements-and-setup',
    element: <RequirementsAndSetup />,
  },
];

export default Install;

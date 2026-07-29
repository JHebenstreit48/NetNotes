import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RolesAndStates = lazy(() => import('@/pages/mainTabs/Networking/Switching/Advanced/STP/RolesAndStates'));
const Protections = lazy(() => import('@/pages/mainTabs/Networking/Switching/Advanced/STP/Protections'));

const STP: RouteObject[] = [
  {
    path: '/networking/switching/advanced/stp/roles-and-states',
    element: <RolesAndStates />,
  },
  {
    path: '/networking/switching/advanced/stp/protections',
    element: <Protections />,
  },
];

export default STP;
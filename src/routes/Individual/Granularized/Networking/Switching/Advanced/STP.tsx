import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RolesAndStates = lazy(() => import('@/Pages/MainTabs/Networking/Switching/Advanced/STP/RolesAndStates'));
const Protections = lazy(() => import('@/Pages/MainTabs/Networking/Switching/Advanced/STP/Protections'));

const STP: RouteObject[] = [
  {
    path: '/switching/advanced/stp/roles-and-states',
    element: <RolesAndStates />,
  },
  {
    path: '/switching/advanced/stp/protections',
    element: <Protections />,
  },
];

export default STP;
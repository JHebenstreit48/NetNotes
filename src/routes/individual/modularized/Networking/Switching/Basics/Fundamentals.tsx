import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Layer2 = lazy(
  () => import('@/Pages/MainTabs/Networking/Switching/Basics/Fundamentals/Layer2')
);
const MACAddressTable = lazy(
  () => import('@/Pages/MainTabs/Networking/Switching/Basics/Fundamentals/MACAddressTable')
);

const Fundamentals: RouteObject[] = [
  {
    path: '/switching/basics/fundamentals/layer-2-switching',
    element: <Layer2 />,
  },
  {
    path: '/switching/basics/fundamentals/mac-address-table',
    element: <MACAddressTable />,
  },
];

export default Fundamentals;
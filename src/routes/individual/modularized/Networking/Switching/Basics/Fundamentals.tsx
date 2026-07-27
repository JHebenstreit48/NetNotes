import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Layer2 = lazy(
  () => import('@/pages/mainTabs/Networking/Switching/Basics/Fundamentals/Layer2')
);
const MACAddressTable = lazy(
  () => import('@/pages/mainTabs/Networking/Switching/Basics/Fundamentals/MACAddressTable')
);

const Fundamentals: RouteObject[] = [
  {
    path: '/networking/switching/basics/fundamentals/layer-2-switching',
    element: <Layer2 />,
  },
  {
    path: '/networking/switching/basics/fundamentals/mac-address-table',
    element: <MACAddressTable />,
  },
];

export default Fundamentals;
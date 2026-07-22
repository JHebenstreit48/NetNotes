import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/Bluetooth/Introduction'));
const PairingAndProfiles = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/Bluetooth/PairingAndProfiles'));

const Bluetooth: RouteObject[] = [
  {
    path: '/mobile/basics/bluetooth/introduction',
    element: <Introduction />,
  },
  {
    path: '/mobile/basics/bluetooth/pairing-and-profiles',
    element: <PairingAndProfiles />,
  },
];

export default Bluetooth;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/Tethering/Introduction'));
const USBVsWiFiVsBluetooth = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/Tethering/USBVsWiFiVsBluetooth'));

const Tethering: RouteObject[] = [
  {
    path: '/networking/mobile/basics/tethering/introduction',
    element: <Introduction />,
  },
  {
    path: '/networking/mobile/basics/tethering/usb-wifi-bluetooth',
    element: <USBVsWiFiVsBluetooth />,
  },
];

export default Tethering;

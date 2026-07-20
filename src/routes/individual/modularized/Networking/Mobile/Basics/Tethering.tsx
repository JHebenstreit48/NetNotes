import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/Tethering/Introduction'));
const USBVsWiFiVsBluetooth = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/Tethering/USBVsWiFiVsBluetooth'));

const Tethering: RouteObject[] = [
  {
    path: '/mobile/basics/tethering/introduction',
    element: <Introduction />,
  },
  {
    path: '/mobile/basics/tethering/usb-wifi-bluetooth',
    element: <USBVsWiFiVsBluetooth />,
  },
];

export default Tethering;

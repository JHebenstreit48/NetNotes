import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WiFiBluetoothInteraction = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Advanced/RadioCoexistence/WiFiBluetoothInteraction'));
const CellularWiFiSwitching = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Advanced/RadioCoexistence/CellularWiFiSwitching'));

const RadioCoexistence: RouteObject[] = [
  {
    path: '/networking/mobile/advanced/coexistence/wifi-and-bluetooth',
    element: <WiFiBluetoothInteraction />,
  },
  {
    path: '/networking/mobile/advanced/coexistence/cellular-and-wifi-switching',
    element: <CellularWiFiSwitching />,
  },
];

export default RadioCoexistence;

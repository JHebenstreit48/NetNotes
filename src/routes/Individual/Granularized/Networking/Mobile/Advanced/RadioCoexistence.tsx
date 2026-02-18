import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WiFiBluetoothInteraction = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Advanced/RadioCoexistence/WiFiBluetoothInteraction'));
const CellularWiFiSwitching = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Advanced/RadioCoexistence/CellularWiFiSwitching'));

const RadioCoexistence: RouteObject[] = [
  {
    path: '/mobile/advanced/coexistence/wifi-and-bluetooth',
    element: <WiFiBluetoothInteraction />,
  },
  {
    path: '/mobile/advanced/coexistence/cellular-and-wifi-switching',
    element: <CellularWiFiSwitching />,
  },
];

export default RadioCoexistence;

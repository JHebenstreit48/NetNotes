import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GatewaysAndProxies = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced/CompatAndInterop/GatewaysAndProxies'));
const LegacyClientsToday = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced/CompatAndInterop/LegacyClientsToday'));

const CompatAndInterop: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/advanced/compat-and-interop/gateways-and-proxies',
    element: <GatewaysAndProxies />,
  },
  {
    path: '/legacy/protocols-and-statuses/advanced/compat-and-interop/legacy-clients-today',
    element: <LegacyClientsToday />,
  },
];

export default CompatAndInterop;

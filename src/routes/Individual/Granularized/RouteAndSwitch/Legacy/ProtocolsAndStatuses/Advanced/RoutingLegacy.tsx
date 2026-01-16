import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RIPTimers = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced/RoutingLegacy/RIPTimers'));
const ISISPDUs = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced/RoutingLegacy/ISISPDUs'));

const RoutingLegacy: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/advanced/routing-legacy/rip-timers',
    element: <RIPTimers />,
  },
  {
    path: '/legacy/protocols-and-statuses/advanced/routing-legacy/isis-pdus',
    element: <ISISPDUs />,
  },
];

export default RoutingLegacy;

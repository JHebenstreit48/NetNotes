import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SwitchesAndConnectors = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Switching/Basics/HardwareAndHistory/SwitchesAndConnectors')
);
const EthernetSpeedHistory = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Switching/Basics/HardwareAndHistory/EthernetSpeedHistory')
);

const HardwareAndHistory: RouteObject[] = [
  {
    path: '/switching/basics/hardware-and-history/switches-and-connectors',
    element: <SwitchesAndConnectors />,
  },
  {
    path: '/switching/basics/hardware-and-history/ethernet-speed-history',
    element: <EthernetSpeedHistory />,
  },
];

export default HardwareAndHistory;
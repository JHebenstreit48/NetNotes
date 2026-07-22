import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SwitchesAndConnectors = lazy(
  () => import('@/pages/MainTabs/Networking/Switching/Basics/HardwareAndPortTypes/SwitchesAndConnectors')
);
const EthernetSpeedHistory = lazy(
  () => import('@/pages/MainTabs/Networking/Switching/Basics/HardwareAndPortTypes/EthernetSpeedHistory')
);

const HardwareAndHistory: RouteObject[] = [
  {
    path: '/switching/basics/hardware-and-port-types/switches-and-connectors',
    element: <SwitchesAndConnectors />,
  },
  {
    path: '/switching/basics/hardware-and-port-types/ethernet-speed-history',
    element: <EthernetSpeedHistory />,
  },
];

export default HardwareAndHistory;
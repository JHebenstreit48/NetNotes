import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/MainTabs/Networking/TCPIPModel/Layers/Application/Advanced/NetworkServices/Introduction'));
const NTP = lazy(() => import('@/pages/MainTabs/Networking/TCPIPModel/Layers/Application/Advanced/NetworkServices/NTP'));
const SNMP = lazy(() => import('@/pages/MainTabs/Networking/TCPIPModel/Layers/Application/Advanced/NetworkServices/SNMP'));
const FTPSFTP = lazy(() => import('@/pages/MainTabs/Networking/TCPIPModel/Layers/Application/Advanced/NetworkServices/FTPSFTP'));

const NetworkServices: RouteObject[] = [
  {
    path: '/tcpip-model/layers/application/advanced/network-services/introduction',
    element: <Introduction />,
  },
  {
    path: '/tcpip-model/layers/application/advanced/network-services/ntp',
    element: <NTP />,
  },
  {
    path: '/tcpip-model/layers/application/advanced/network-services/snmp',
    element: <SNMP />,
  },
  {
    path: '/tcpip-model/layers/application/advanced/network-services/ftp',
    element: <FTPSFTP />,
  },
];

export default NetworkServices;
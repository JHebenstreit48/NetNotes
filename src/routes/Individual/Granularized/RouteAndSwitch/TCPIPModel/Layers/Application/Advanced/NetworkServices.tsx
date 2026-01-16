import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DHCP = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Advanced/NetworkServices/DHCP'));
const NTP = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Advanced/NetworkServices/NTP'));
const SNMP = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Advanced/NetworkServices/SNMP'));
const FTPSFTP = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Advanced/NetworkServices/FTPSFTP'));

const NetworkServices: RouteObject[] = [
  {
    path: '/tcpip-model/layers/application/advanced/network-services/dhcp',
    element: <DHCP />,
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

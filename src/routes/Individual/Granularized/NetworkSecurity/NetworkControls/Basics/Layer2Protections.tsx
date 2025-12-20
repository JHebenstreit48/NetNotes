import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PortSecurity = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/NetworkControls/Basics/Layer2Protections/PortSecurity'));
const DHCPSnoopingAndDAI = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/NetworkControls/Basics/Layer2Protections/DHCPSnoopingAndDAI'));

const Layer2Protections: RouteObject[] = [
  {
    path: '/net-controls/basics/l2/port-security',
    element: <PortSecurity />,
  },
  {
    path: '/net-controls/basics/l2/dhcp-snooping-dai',
    element: <DHCPSnoopingAndDAI />,
  },
];

export default Layer2Protections;

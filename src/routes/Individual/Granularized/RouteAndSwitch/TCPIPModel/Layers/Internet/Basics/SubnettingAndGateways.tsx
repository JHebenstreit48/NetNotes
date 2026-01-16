import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SubnetMasksAndCIDR = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Internet/Basics/SubnettingAndGateways/SubnetMasksAndCIDR'));
const DefaultGatewayAndRoutingTables = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Internet/Basics/SubnettingAndGateways/DefaultGatewayAndRoutingTables'));

const SubnettingAndGateways: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/basics/subnetting-and-gateways/subnet-masks-and-cidr',
    element: <SubnetMasksAndCIDR />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/subnetting-and-gateways/default-gateway-and-routing-tables',
    element: <DefaultGatewayAndRoutingTables />,
  },
];

export default SubnettingAndGateways;

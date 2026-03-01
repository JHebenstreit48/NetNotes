import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SubnetMasksAndCIDR = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/SubnetMasksAndCIDR'));
const DefaultGatewayAndRoutingTables = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/DefaultGatewayAndRoutingTables'));
const IPv4Subnetting = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/IPv4Subnetting'));
const IPv6Subnetting = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/IPv6Subnetting'));

const SubnettingAndGateways: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/subnet-masks-and-cidr',
    element: <SubnetMasksAndCIDR />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/default-gateway-and-routing-tables',
    element: <DefaultGatewayAndRoutingTables />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/ipv4-subnetting',
    element: <IPv4Subnetting />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/ipv6-subnetting',
    element: <IPv6Subnetting />,
  }
];

export default SubnettingAndGateways;
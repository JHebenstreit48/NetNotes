import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SubnetMasksAndCIDR = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/SubnetMasksAndCIDR'));
const BroadcastDomainsAndSegmentation = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/BroadcastDomainsAndSegmentation'));
const DefaultGatewayAndRoutingTables = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/DefaultGatewayAndRoutingTables'));
const IPv4Subnetting = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/IPv4Subnetting'));
const IPv6Subnetting = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/IPv6Subnetting'));

const SubnettingAndGateways: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/subnet-masks-and-cidr',
    element: <SubnetMasksAndCIDR />,
  },
  {
    path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/broadcast-domains-and-segmentation',
    element: <BroadcastDomainsAndSegmentation />,
  },
  {
    path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/default-gateway-and-routing-tables',
    element: <DefaultGatewayAndRoutingTables />,
  },
  {
    path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/ipv4-subnetting',
    element: <IPv4Subnetting />,
  },
  {
    path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/ipv6-subnetting',
    element: <IPv6Subnetting />,
  }
];

export default SubnettingAndGateways;
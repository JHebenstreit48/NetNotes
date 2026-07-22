import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ICMP = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Basics/ICMPAndCommands/ICMP'));
const Ipconfig = lazy(
  () => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Basics/ICMPAndCommands/Ipconfig')
);
const PingAndTraceroute = lazy(
  () => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Basics/ICMPAndCommands/PingAndTraceroute')
);

const ICMPAndDiagnostics: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/basics/icmp-and-commands/icmp',
    element: <ICMP />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/icmp-and-commands/ipconfig',
    element: <Ipconfig />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/icmp-and-commands/ping-and-traceroute',
    element: <PingAndTraceroute />,
  },
];

export default ICMPAndDiagnostics;
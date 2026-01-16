import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ICMPBasics = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Internet/Basics/ICMPAndDiagnostics/ICMPBasics'));
const PingAndTraceroute = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Internet/Basics/ICMPAndDiagnostics/PingAndTraceroute'));

const ICMPAndDiagnostics: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/basics/icmp-and-diagnostics/icmp-basics',
    element: <ICMPBasics />,
  },
  {
    path: '/tcpip-model/layers/internet/basics/icmp-and-diagnostics/ping-and-traceroute',
    element: <PingAndTraceroute />,
  },
];

export default ICMPAndDiagnostics;

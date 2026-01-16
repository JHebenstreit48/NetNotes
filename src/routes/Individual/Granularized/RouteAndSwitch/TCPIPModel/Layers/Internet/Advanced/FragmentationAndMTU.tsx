import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IPv4DFMFAndReassembly = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Internet/Advanced/FragmentationAndMTU/IPv4DFMFAndReassembly'));
const PathMTUDiscovery = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Internet/Advanced/FragmentationAndMTU/PathMTUDiscovery'));

const FragmentationAndMTU: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/fragmentation-and-mtu/ipv4-df-mf-and-reassembly',
    element: <IPv4DFMFAndReassembly />,
  },
  {
    path: '/tcpip-model/layers/internet/fragmentation-and-mtu/path-mtu-discovery',
    element: <PathMTUDiscovery />,
  },
];

export default FragmentationAndMTU;

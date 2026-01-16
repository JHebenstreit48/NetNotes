import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MACAddressing = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing/MACAddressing'));
const EthernetFrameFields = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing/EthernetFrameFields'));

const FramesAndAddressing: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing',
    element: <MACAddressing />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/ethernet-frame-fields',
    element: <EthernetFrameFields />,
  },
];

export default FramesAndAddressing;

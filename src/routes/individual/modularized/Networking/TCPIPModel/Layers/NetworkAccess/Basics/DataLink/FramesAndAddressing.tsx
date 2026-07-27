import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MACAddressing = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing/MACAddressing'));
const EthernetFrameFields = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing/EthernetFrameFields'));
const BurnedInAddress = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing/BIA'));

const FramesAndAddressing: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing',
    element: <MACAddressing />,
  },
  {
    path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/ethernet-frame-fields',
    element: <EthernetFrameFields />,
  },
  {
    path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/burned-in-address-bia',
    element: <BurnedInAddress />,
  },
];

export default FramesAndAddressing;
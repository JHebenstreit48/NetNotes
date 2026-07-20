import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MTUAndPathMTU = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/MTUAndFraming/MTUAndPathMTU'));
const JumboFrames = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/MTUAndFraming/JumboFrames'));

const MTUAndFraming: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/advanced/data-link/mtu-and-framing/mtu-and-path-mtu',
    element: <MTUAndPathMTU />,
  },
  {
    path: '/tcpip-model/layers/network-access/advanced/data-link/mtu-and-framing/jumbo-frames',
    element: <JumboFrames />,
  },
];

export default MTUAndFraming;
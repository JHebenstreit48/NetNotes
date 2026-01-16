import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PacketBytesTree = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Basics/ViewsAndTools/PacketBytesTree'));
const IOGraphsAndStats = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Basics/ViewsAndTools/IOGraphsAndStats'));

const ViewsAndTools: RouteObject[] = [
  {
    path: '/wireshark/basics/views-and-tools/packet-bytes-tree',
    element: <PacketBytesTree />,
  },
  {
    path: '/wireshark/basics/views-and-tools/io-graphs-and-stats',
    element: <IOGraphsAndStats />,
  },
];

export default ViewsAndTools;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Bandwidth = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/BandwidthThroughput/Bandwidth'));
const Throughput = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/BandwidthThroughput/Throughput'));

const BandwidthAndThroughput: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth',
    element: <Bandwidth />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/bandwidth-and-throughput/throughput',
    element: <Throughput />,
  },
];

export default BandwidthAndThroughput;
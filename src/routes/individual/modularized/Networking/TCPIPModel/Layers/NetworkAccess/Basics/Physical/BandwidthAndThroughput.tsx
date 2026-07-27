import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Bandwidth = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/BandwidthThroughput/Bandwidth'));
const Throughput = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/BandwidthThroughput/Throughput'));

const BandwidthAndThroughput: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth',
    element: <Bandwidth />,
  },
  {
    path: '/networking/tcp-ip-model/layers/network-access/basics/physical/bandwidth-and-throughput/throughput',
    element: <Throughput />,
  },
];

export default BandwidthAndThroughput;
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Bandwidth = lazy(
  () =>
    import(
      '@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/BandwidthThroughput/Bandwidth'
    )
);
const Throughput = lazy(
  () =>
    import(
      '@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/BandwidthThroughput/Throughput'
    )
);

const BandwidthThroughput: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth',
    element: <Bandwidth />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/bandwidth-and-throughput/throughput',
    element: <Throughput />,
  },
];

export default BandwidthThroughput;
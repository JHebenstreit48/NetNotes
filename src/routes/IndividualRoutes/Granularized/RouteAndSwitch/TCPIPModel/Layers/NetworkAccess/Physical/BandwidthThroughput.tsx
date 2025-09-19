import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Bandwidth = lazy(
  () =>
    import(
      '@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/TransmissionConcepts/BandwidthThroughput/Bandwidth'
    )
);
const Throughput = lazy(
  () =>
    import(
      '@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/TransmissionConcepts/BandwidthThroughput/Throughput'
    )
);

const BandwidthThroughput: RouteObject[] = [
  {
    path: '/corenetworking/tcpipmodel/networkaccess/physical/transmission/bandwidththroughput/bandwidth',
    element: <Bandwidth />,
  },
  {
    path: '/corenetworking/tcpipmodel/networkaccess/physical/transmission/bandwidththroughput/throughput',
    element: <Throughput />,
  },
];

export default BandwidthThroughput;

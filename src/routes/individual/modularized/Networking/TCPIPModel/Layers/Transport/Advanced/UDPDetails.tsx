import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DatagramsAndChecksum = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Advanced/UDPDetails/DatagramsAndChecksum'));
const MultiplexingDemuxAndUseCases = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Advanced/UDPDetails/MultiplexingDemuxAndUseCases'));

const UDPDetails: RouteObject[] = [
  {
    path: '/tcpip-model/layers/transport/advanced/udp/datagrams-and-checksum',
    element: <DatagramsAndChecksum />,
  },
  {
    path: '/tcpip-model/layers/transport/advanced/udp/multiplexing-demux-use-cases',
    element: <MultiplexingDemuxAndUseCases />,
  },
];

export default UDPDetails;

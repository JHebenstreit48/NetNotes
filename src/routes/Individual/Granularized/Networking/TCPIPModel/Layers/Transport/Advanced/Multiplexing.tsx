import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProcessDemultiplexing = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Advanced/Multiplexing/ProcessDemultiplexing'));
const EphemeralAndWellKnownPorts = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Advanced/Multiplexing/EphemeralAndWellKnownPorts'));

const Multiplexing: RouteObject[] = [
  {
    path: '/tcpip-model/layers/transport/advanced/multiplexing/process-demultiplexing',
    element: <ProcessDemultiplexing />,
  },
  {
    path: '/tcpip-model/layers/transport/advanced/multiplexing/ephemeral-and-well-known-ports',
    element: <EphemeralAndWellKnownPorts />,
  },
];

export default Multiplexing;

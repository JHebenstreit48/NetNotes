import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RpcapSshdump = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Advanced/RemoteCapture/RpcapSshdump'));
const RingBuffersAndPerformance = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Advanced/RemoteCapture/RingBuffersAndPerformance'));

const RemoteCapture: RouteObject[] = [
  {
    path: '/wireshark/advanced/remote-capture/rpcap-and-sshdump',
    element: <RpcapSshdump />,
  },
  {
    path: '/wireshark/advanced/remote-capture/ring-buffers-and-performance',
    element: <RingBuffersAndPerformance />,
  },
];

export default RemoteCapture;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ReliableDeliveryFlowControl = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Basics/Reliability/ReliableDeliveryFlowControl'));
const SegmentationAndReassembly = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Basics/Reliability/SegmentationAndReassembly'));

const Reliability: RouteObject[] = [
  {
    path: '/tcpip-model/layers/transport/basics/reliability/reliable-delivery-flow-control',
    element: <ReliableDeliveryFlowControl />,
  },
  {
    path: '/tcpip-model/layers/transport/basics/reliability/segmentation-reassembly',
    element: <SegmentationAndReassembly />,
  },
];

export default Reliability;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CommStandards = lazy(
  () =>
    import(
      '@/Pages/MainTabs/CoreConcepts/Basics/TCPIPModel/Layers/NetworkAccess/PhysicalLayer/TransmissionConcepts/CommunicateStandards'
    )
);
const DataTransmitMethods = lazy(
  () =>
    import(
      '@/Pages/MainTabs/CoreConcepts/Basics/TCPIPModel/Layers/NetworkAccess/PhysicalLayer/TransmissionConcepts/DataTransmitMethods'
    )
);
import BandwidthThroughput from '@/routes/IndividualRoutes/Granularized/CoreConcepts/TCPIPModel/Layers/NetworkAccess/Physical/BandwidthThroughput';
const EncapDeencap = lazy(
  () =>
    import(
      '@/Pages/MainTabs/CoreConcepts/Basics/TCPIPModel/Layers/NetworkAccess/PhysicalLayer/TransmissionConcepts/EncapDeencap'
    )
);

const TransmissionConcepts: RouteObject[] = [
  {
    path: '/corenetworking/tcpipmodel/networkaccess/physical/transmission/standardsofcomm',
    element: <CommStandards />,
  },
  {
    path: '/corenetworking/tcpipmodel/networkaccess/physical/transmission/datatransmission',
    element: <DataTransmitMethods />,
  },
  ...BandwidthThroughput,
  {
    path: '/corenetworking/tcpipmodel/networkaccess/physical/transmission/encapanddeencap',
    element: <EncapDeencap />,
  },
];

export default TransmissionConcepts;

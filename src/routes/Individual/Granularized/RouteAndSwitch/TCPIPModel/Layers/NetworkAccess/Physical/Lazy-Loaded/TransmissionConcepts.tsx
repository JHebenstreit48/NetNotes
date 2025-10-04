import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CommStandards = lazy(
  () =>
    import(
      '@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/TransmissionConcepts/CommunicateStandards'
    )
);
const DataTransmitMethods = lazy(
  () =>
    import(
      '@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Physical/TransmissionConcepts/DataTransmitMethods'
    )
);

const TransmissionConcepts: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/physical/transmission/communication-standards',
    element: <CommStandards />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/transmission/data-transmission',
    element: <DataTransmitMethods />,
  },

];

export default TransmissionConcepts;
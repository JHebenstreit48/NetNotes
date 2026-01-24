import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CommunicationStandards = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/TransmissionConcepts/CommunicateStandards'));
const DataTransmissionMethods = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/TransmissionConcepts/DataTransmitMethods'));

const TransmissionConcepts: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/physical/transmission/communication-standards',
    element: <CommunicationStandards />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/transmission/data-transmission-methods',
    element: <DataTransmissionMethods />,
  },
];

export default TransmissionConcepts;
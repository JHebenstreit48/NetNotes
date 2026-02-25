import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EthernetCablingCategories = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/CablingAndInterfaces/EthernetCablingCategories'));
const CoaxialCable = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/CablingAndInterfaces/CoaxialCable'));
const CopperConnectors = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/CablingAndInterfaces/CopperConnectors'));
const FiberConnectors = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/CablingAndInterfaces/FiberConnectors'));

const BandwidthAndThroughput: RouteObject[] = [
  {
    path: '/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/ethernet-cabling-categories',
    element: <EthernetCablingCategories />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/coaxial-cable',
    element: <CoaxialCable />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/copper-connectors',
    element: <CopperConnectors />,
  },
  {
    path: '/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/fiber-connectors-and-transceivers',
    element: <FiberConnectors />,
  }
];

export default BandwidthAndThroughput;
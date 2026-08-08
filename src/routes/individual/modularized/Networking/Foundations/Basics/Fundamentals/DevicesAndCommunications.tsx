import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ConnectedDevices = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/DevicesAndCommunications/ConnectedDevices')
);
const StandardsAndOrganizations = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/DevicesAndCommunications/ProtocolsAndStandards')
);

const ProtocolsAndStandards: RouteObject[] = [
  {
    path: '/networking/foundations/basics/fundamentals/devices-and-communication/connected-devices',
    element: <ConnectedDevices />,
  },
  {
    path: '/networking/foundations/basics/fundamentals/devices-and-communication/protocols-and-standards',
    element: <StandardsAndOrganizations />,
  }
];

export default ProtocolsAndStandards;
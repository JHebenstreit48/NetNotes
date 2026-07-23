import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CommunicationProtocols = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/ProtocolsAndStandards/CommunicationProtocols')
);
const StandardsAndOrganizations = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/Fundamentals/ProtocolsAndStandards/StandardsAndOrganizations')
);

const ProtocolsAndStandards: RouteObject[] = [
  {
    path: '/foundations/basics/fundamentals/protocols-and-standards/communication-protocols',
    element: <CommunicationProtocols />,
  },
  {
    path: '/foundations/basics/fundamentals/protocols-and-standards/standards-and-organizations',
    element: <StandardsAndOrganizations />,
  }
];

export default ProtocolsAndStandards;
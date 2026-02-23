import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/Networking/Foundations/Basics/Fundamentals/Introduction')
);
const Internet = lazy(
  () => import('@/Pages/MainTabs/Networking/Foundations/Basics/Fundamentals/InternetAndNetworks')
);
const LocalNetworks = lazy(
  () => import('@/Pages/MainTabs/Networking/Foundations/Basics/Fundamentals/LocalNetworks')
);
const ConnectedDevices = lazy(
  () => import('@/Pages/MainTabs/Networking/Foundations/Basics/Fundamentals/ConnectedDevices')
);
const CommunicationProtocols = lazy(
  () => import('@/Pages/MainTabs/Networking/Foundations/Basics/Fundamentals/CommunicationProtocols')
);
const StandardsAndOrganizations = lazy(
  () => import('@/Pages/MainTabs/Networking/Foundations/Basics/Fundamentals/StandardsAndOrganizations')
);

const Overview: RouteObject[] = [
  {
    path: '/foundations/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/foundations/basics/fundamentals/internet',
    element: <Internet />,
  },
  {
    path: '/foundations/basics/fundamentals/local-networks',
    element: <LocalNetworks />,
  },
  {
    path: '/foundations/basics/fundamentals/connected-devices',
    element: <ConnectedDevices />,
  },
  {
    path: '/foundations/basics/fundamentals/communication-protocols',
    element: <CommunicationProtocols />,
  },
  {
    path: '/foundations/basics/fundamentals/standards-and-organizations',
    element: <StandardsAndOrganizations />,
  }
];

export default Overview;
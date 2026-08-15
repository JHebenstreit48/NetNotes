import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreConcepts = lazy(() => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/NetworkAccess/Basics/DataLink/CoreConcepts'));
const FramesAndAddressing = lazy(() => import('@/pages/mainTabs/Glossary/Networking/TCPIPModel/NetworkAccess/Basics/DataLink/FramesAndAddressing'));

const DataLink: RouteObject[] = [
  {
    path: '/glossary/networking/tcp-ip-model/network-access/data-link/core-concepts',
    element: <CoreConcepts />,
  },
  {
    path: '/glossary/networking/tcp-ip-model/network-access/data-link/frames-and-addressing',
    element: <FramesAndAddressing />,
  }
];

export default DataLink;
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CoreConcepts/Basics/TCPIPModel/Layers/NetworkAccess/DataLink/CoreConcepts/Introduction'));
const BIA = lazy(() => import('@/Pages/MainTabs/CoreConcepts/Basics/TCPIPModel/Layers/NetworkAccess/DataLink/CoreConcepts/BIA'));
const ARP = lazy(() => import('@/Pages/MainTabs/CoreConcepts/Basics/TCPIPModel/Layers/NetworkAccess/DataLink/CoreConcepts/ARP'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/coreconcepts/basics/tcpipmodel/networkaccess/datalink/coreconcepts/introduction',
    element: <Introduction />
  },
  {
    path: '/coreconcepts/basics/tcpipmodel/networkaccess/datalink/coreconcepts/bia',
    element: <BIA />
  },
  {
    path: '/coreconcepts/basics/tcpipmodel/networkaccess/datalink/coreconcepts/arp',
    element: <ARP />
  },
];

export default CoreConcepts;
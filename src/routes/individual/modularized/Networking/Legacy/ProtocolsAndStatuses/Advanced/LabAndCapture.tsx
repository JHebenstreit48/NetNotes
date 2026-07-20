import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GNS3EVENGLabs = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Advanced/LabAndCapture/GNS3EVENGLabs'));
const WiresharkProfiles = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Advanced/LabAndCapture/WiresharkProfiles'));

const LabAndCapture: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/advanced/lab-and-capture/gns3-eve-ng-labs',
    element: <GNS3EVENGLabs />,
  },
  {
    path: '/legacy/protocols-and-statuses/advanced/lab-and-capture/wireshark-profiles',
    element: <WiresharkProfiles />,
  },
];

export default LabAndCapture;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntrusionDetection = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/IDSAndIPS/Basics/DetectionConcepts/IntrusionDetection'));
const IDSVsIPS = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/IDSAndIPS/Basics/DetectionConcepts/IDSVsIPS'));

const DetectionConcepts: RouteObject[] = [
  {
    path: '/ids-ips/basics/detection/intrusion-detection',
    element: <IntrusionDetection />,
  },
  {
    path: '/ids-ips/basics/detection/ids-vs-ips',
    element: <IDSVsIPS />,
  },
];

export default DetectionConcepts;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TLSAndSRTPAtAHighLevel = lazy(() => import('@/Pages/MainTabs/VoIP/Foundations/Advanced/SecurityOverview/TLSAndSRTPAtAHighLevel'));
const SBCsAndEdgeDesign = lazy(() => import('@/Pages/MainTabs/VoIP/Foundations/Advanced/SecurityOverview/SBCsAndEdgeDesign'));

const SecurityOverview: RouteObject[] = [
  {
    path: '/voip/introduction/advanced/security/tls-srtp-overview',
    element: <TLSAndSRTPAtAHighLevel />,
  },
  {
    path: '/voip/introduction/advanced/security/sbcs-and-edge-design',
    element: <SBCsAndEdgeDesign />,
  },
];

export default SecurityOverview;

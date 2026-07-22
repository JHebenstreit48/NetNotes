import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VoIPTroubleshootingMindset = lazy(() => import('@/pages/mainTabs/VoIP/Diagnostics/Basics/Foundations/VoIPTroubleshootingMindset'));
const MediaVsSignalingSymptoms = lazy(() => import('@/pages/mainTabs/VoIP/Diagnostics/Basics/Foundations/MediaVsSignalingSymptoms'));

const Foundations: RouteObject[] = [
  {
    path: '/voip/diagnostics/basics/foundations/troubleshooting-mindset',
    element: <VoIPTroubleshootingMindset />,
  },
  {
    path: '/voip/diagnostics/basics/foundations/media-vs-signaling',
    element: <MediaVsSignalingSymptoms />,
  },
];

export default Foundations;

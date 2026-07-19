import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RTPAndJitterAnalysis = lazy(() => import('@/Pages/MainTabs/VoIP/Diagnostics/Advanced/MediaQuality/RTPAndJitterAnalysis'));
const MOSAndPacketLoss = lazy(() => import('@/Pages/MainTabs/VoIP/Diagnostics/Advanced/MediaQuality/MOSAndPacketLoss'));

const MediaQuality: RouteObject[] = [
  {
    path: '/voip/diagnostics/advanced/media/rtp-jitter-analysis',
    element: <RTPAndJitterAnalysis />,
  },
  {
    path: '/voip/diagnostics/advanced/media/mos-packet-loss',
    element: <MOSAndPacketLoss />,
  },
];

export default MediaQuality;

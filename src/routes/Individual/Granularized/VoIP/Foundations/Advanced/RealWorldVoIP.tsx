import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WhyVoIPBreaks = lazy(() => import('@/Pages/MainTabs/VoIP/Foundations/Advanced/RealWorldVoIP/WhyVoIPBreaks'));
const LatencyJitterAndLoss = lazy(() => import('@/Pages/MainTabs/VoIP/Foundations/Advanced/RealWorldVoIP/LatencyJitterAndLoss'));

const RealWorldVoIP: RouteObject[] = [
  {
    path: '/voip/introduction/advanced/real-world/why-voip-breaks',
    element: <WhyVoIPBreaks />,
  },
  {
    path: '/voip/introduction/advanced/real-world/latency-jitter-loss',
    element: <LatencyJitterAndLoss />,
  },
];

export default RealWorldVoIP;

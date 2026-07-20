import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SIPVsRTP = lazy(() => import('@/Pages/MainTabs/VoIP/Foundations/Basics/CallBasics/SIPVsRTP'));
const BasicCallFlow = lazy(() => import('@/Pages/MainTabs/VoIP/Foundations/Basics/CallBasics/BasicCallFlow'));

const CallBasics: RouteObject[] = [
  {
    path: '/voip/introduction/basics/call-basics/sip-vs-rtp',
    element: <SIPVsRTP />,
  },
  {
    path: '/voip/introduction/basics/call-basics/basic-call-flow',
    element: <BasicCallFlow />,
  },
];

export default CallBasics;

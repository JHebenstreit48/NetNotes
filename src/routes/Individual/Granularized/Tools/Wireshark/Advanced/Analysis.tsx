import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FollowStreamsAndRTT = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Advanced/Analysis/FollowStreamsAndRTT'));
const TLSKeysAndDecryption = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Advanced/Analysis/TLSKeysAndDecryption'));

const Analysis: RouteObject[] = [
  {
    path: '/wireshark/advanced/analysis/follow-streams-and-rtt',
    element: <FollowStreamsAndRTT />,
  },
  {
    path: '/wireshark/advanced/analysis/tls-keys-and-decryption',
    element: <TLSKeysAndDecryption />,
  },
];

export default Analysis;

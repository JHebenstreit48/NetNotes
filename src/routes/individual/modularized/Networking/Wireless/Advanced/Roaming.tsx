import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EightOTwoElevenkVR = lazy(() => import('@/Pages/MainTabs/Networking/Wireless/Advanced/Roaming/EightOTwoEleventkVR'));
const FastTransitionNotes = lazy(() => import('@/Pages/MainTabs/Networking/Wireless/Advanced/Roaming/FastTransitionNotes'));

const Roaming: RouteObject[] = [
  {
    path: '/wireless/advanced/roaming/80211kvr',
    element: <EightOTwoElevenkVR />,
  },
  {
    path: '/wireless/advanced/roaming/fast-transition-notes',
    element: <FastTransitionNotes />,
  },
];

export default Roaming;

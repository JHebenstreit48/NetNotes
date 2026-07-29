import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EightOTwoElevenkVR = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Advanced/Roaming/EightOTwoEleventkVR'));
const FastTransitionNotes = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Advanced/Roaming/FastTransitionNotes'));

const Roaming: RouteObject[] = [
  {
    path: '/networking/wireless/advanced/roaming/80211kvr',
    element: <EightOTwoElevenkVR />,
  },
  {
    path: '/networking/wireless/advanced/roaming/fast-transition-notes',
    element: <FastTransitionNotes />,
  },
];

export default Roaming;

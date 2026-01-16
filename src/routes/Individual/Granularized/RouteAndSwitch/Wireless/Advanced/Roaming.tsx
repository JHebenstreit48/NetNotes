import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const 80211kVR = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Wireless/Advanced/Roaming/80211kVR'));
const FastTransitionNotes = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Wireless/Advanced/Roaming/FastTransitionNotes'));

const Roaming: RouteObject[] = [
  {
    path: '/wireless/advanced/roaming/80211kvr',
    element: <80211kVR />,
  },
  {
    path: '/wireless/advanced/roaming/fast-transition-notes',
    element: <FastTransitionNotes />,
  },
];

export default Roaming;

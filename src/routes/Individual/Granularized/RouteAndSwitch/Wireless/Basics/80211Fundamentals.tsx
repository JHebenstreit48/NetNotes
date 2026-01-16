import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WirelessStandards = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Wireless/Basics/80211Fundamentals/WirelessStandards'));
const FrequenciesAndChannels = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Wireless/Basics/80211Fundamentals/FrequenciesAndChannels'));

const 80211Fundamentals: RouteObject[] = [
  {
    path: '/wireless/basics/80211/wireless-standards',
    element: <WirelessStandards />,
  },
  {
    path: '/wireless/basics/80211/frequencies-and-channels',
    element: <FrequenciesAndChannels />,
  },
];

export default 80211Fundamentals;

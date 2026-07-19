import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WirelessStandards = lazy(() => import('@/Pages/MainTabs/Networking/Wireless/Basics/80211Fundamentals/WirelessStandards'));
const FrequenciesAndChannels = lazy(() => import('@/Pages/MainTabs/Networking/Wireless/Basics/80211Fundamentals/FrequenciesAndChannels'));

const EightOTwoElevenFundamentals: RouteObject[] = [
  {
    path: '/wireless/basics/80211/wireless-standards',
    element: <WirelessStandards />,
  },
  {
    path: '/wireless/basics/80211/frequencies-and-channels',
    element: <FrequenciesAndChannels />,
  },
];

export default EightOTwoElevenFundamentals;

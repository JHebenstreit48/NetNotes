import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WirelessStandards = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Basics/80211Fundamentals/WirelessStandards'));
const FrequenciesAndChannels = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Basics/80211Fundamentals/FrequenciesAndChannels'));

const EightOTwoElevenFundamentals: RouteObject[] = [
  {
    path: '/networking/wireless/basics/80211/wireless-standards',
    element: <WirelessStandards />,
  },
  {
    path: '/networking/wireless/basics/80211/frequencies-and-channels',
    element: <FrequenciesAndChannels />,
  },
];

export default EightOTwoElevenFundamentals;

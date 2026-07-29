import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WirelessTroubleshooting = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Basics/Troubleshooting/WirelessTroubleshooting'));
const CommonIssuesAndFixes = lazy(() => import('@/pages/mainTabs/Networking/Wireless/Basics/Troubleshooting/CommonIssuesAndFixes'));

const Troubleshooting: RouteObject[] = [
  {
    path: '/networking/wireless/basics/troubleshooting/wireless-troubleshooting',
    element: <WirelessTroubleshooting />,
  },
  {
    path: '/networking/wireless/basics/troubleshooting/common-issues-and-fixes',
    element: <CommonIssuesAndFixes />,
  },
];

export default Troubleshooting;

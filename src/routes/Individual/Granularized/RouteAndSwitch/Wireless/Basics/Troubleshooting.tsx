import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WirelessTroubleshooting = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Wireless/Basics/Troubleshooting/WirelessTroubleshooting'));
const CommonIssuesAndFixes = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Wireless/Basics/Troubleshooting/CommonIssuesAndFixes'));

const Troubleshooting: RouteObject[] = [
  {
    path: '/wireless/basics/troubleshooting/wireless-troubleshooting',
    element: <WirelessTroubleshooting />,
  },
  {
    path: '/wireless/basics/troubleshooting/common-issues-and-fixes',
    element: <CommonIssuesAndFixes />,
  },
];

export default Troubleshooting;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ShowAccessLists = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot/ShowAccessLists'));
const ShowRunInterface = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot/ShowRunInterface'));
const PingAndTraceroute = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot/PingAndTraceroute'));
const CommonMistakes = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot/CommonMistakes'));

const VerifyAndTroubleshoot: RouteObject[] = [
  {
    path: '/acls/advanced/verify-troubleshoot/show-access-lists',
    element: <ShowAccessLists />,
  },
  {
    path: '/acls/advanced/verify-troubleshoot/show-run-interface',
    element: <ShowRunInterface />,
  },
  {
    path: '/acls/advanced/verify-troubleshoot/ping-traceroute',
    element: <PingAndTraceroute />,
  },
  {
    path: '/acls/advanced/verify-troubleshoot/common-mistakes',
    element: <CommonMistakes />,
  },
];

export default VerifyAndTroubleshoot;

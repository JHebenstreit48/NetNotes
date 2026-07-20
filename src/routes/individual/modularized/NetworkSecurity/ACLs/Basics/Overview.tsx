import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Fundamentals = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Basics/Overview/Fundamentals'));
const ProcessingAndRuleOrder = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Basics/Overview/ProcessingAndRuleOrder'));
const NamedVsNumbered = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Basics/Overview/NamedVsNumbered'));

const Overview: RouteObject[] = [
  {
    path: '/acls/basics/overview/fundamentals',
    element: <Fundamentals />,
  },
  {
    path: '/acls/basics/overview/processing',
    element: <ProcessingAndRuleOrder />,
  },
  {
    path: '/acls/basics/overview/named-vs-numbered',
    element: <NamedVsNumbered />,
  },
];

export default Overview;

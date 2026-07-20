import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InlineVsSPANTAP = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/IDSAndIPS/Basics/PlacementAndTuning/InlineVsSPANTAP'));
const ReducingFalsePositives = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/IDSAndIPS/Basics/PlacementAndTuning/ReducingFalsePositives'));

const PlacementAndTuning: RouteObject[] = [
  {
    path: '/ids-ips/basics/placement/inline-vs-span',
    element: <InlineVsSPANTAP />,
  },
  {
    path: '/ids-ips/basics/tuning/reducing-false-positives',
    element: <ReducingFalsePositives />,
  },
];

export default PlacementAndTuning;

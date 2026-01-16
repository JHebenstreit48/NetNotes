import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DistanceVectorVsLinkState = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Routing/Basics/ProtocolFamilies/DistanceVectorVsLinkState'));
const IGPVsEGP = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Routing/Basics/ProtocolFamilies/IGPVsEGP'));

const ProtocolFamilies: RouteObject[] = [
  {
    path: '/routing-protocols/basics/protocol-families/distance-vector-vs-link-state',
    element: <DistanceVectorVsLinkState />,
  },
  {
    path: '/routing-protocols/basics/protocol-families/igp-vs-egp',
    element: <IGPVsEGP />,
  },
];

export default ProtocolFamilies;

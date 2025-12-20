import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EnterpriseVsSecurity = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Basics/Tracks/EnterpriseVsSecurity'));
const DataCenterSPCollab = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Basics/Tracks/DataCenterSPCollab'));

const Tracks: RouteObject[] = [
  {
    path: '/certifications/cisco/ccie/basics/tracks/enterprise-vs-security',
    element: <EnterpriseVsSecurity />,
  },
  {
    path: '/certifications/cisco/ccie/basics/tracks/data-center-sp-collab',
    element: <DataCenterSPCollab />,
  },
];

export default Tracks;

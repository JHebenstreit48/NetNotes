import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OnPremWLCVsCloud = lazy(
  () => import('@/pages/mainTabs/Networking/Cloud/Basics/ManagementModels/OnPremWLCVsCloud')
);
const LicenseAndSubscription = lazy(
  () => import('@/pages/mainTabs/Networking/Cloud/Basics/ManagementModels/LicenseAndSubscription')
);

const ManagementModels: RouteObject[] = [
  {
    path: '/networking/cloud/basics/management-models/on-prem-wlc-vs-cloud',
    element: <OnPremWLCVsCloud />,
  },
  {
    path: '/networking/cloud/basics/management-models/licensing-and-subscriptions',
    element: <LicenseAndSubscription />,
  },
];

export default ManagementModels;
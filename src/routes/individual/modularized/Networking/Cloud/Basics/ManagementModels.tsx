import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OnPremWLCVsCloud = lazy(
  () => import('@/pages/MainTabs/Networking/Cloud/Basics/ManagementModels/OnPremWLCVsCloud')
);
const LicenseAndSubscription = lazy(
  () => import('@/pages/MainTabs/Networking/Cloud/Basics/ManagementModels/LicenseAndSubscription')
);

const ManagementModels: RouteObject[] = [
  {
    path: '/cloud/basics/management-models/on-prem-wlc-vs-cloud',
    element: <OnPremWLCVsCloud />,
  },
  {
    path: '/cloud/basics/management-models/licensing-and-subscriptions',
    element: <LicenseAndSubscription />,
  },
];

export default ManagementModels;
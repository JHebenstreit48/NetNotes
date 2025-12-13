import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OnPremWLCVsCloud = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Basics/ManagementModels/OnPremWLCVsCloud')
);
const LicenseAndSubscription = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Basics/ManagementModels/LicenseAndSubscription')
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
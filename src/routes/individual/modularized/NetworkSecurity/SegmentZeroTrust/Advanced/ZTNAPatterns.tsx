import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BrokeredAccess = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/SegmentZeroTrust/Advanced/ZTNAPatterns/BrokeredAccess'));
const AppSegmentation = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/SegmentZeroTrust/Advanced/ZTNAPatterns/AppSegmentation'));

const ZTNAPatterns: RouteObject[] = [
  {
    path: '/segmentation/advanced/ztna/brokered-access',
    element: <BrokeredAccess />,
  },
  {
    path: '/segmentation/advanced/ztna/app-segmentation',
    element: <AppSegmentation />,
  },
];

export default ZTNAPatterns;

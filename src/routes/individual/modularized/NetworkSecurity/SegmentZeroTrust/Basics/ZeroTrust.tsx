import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Principles = lazy(() => import('@/pages/mainTabs/NetworkSecurity/SegmentZeroTrust/Basics/ZeroTrust/Principles'));
const IdentityAndMicroperimeters = lazy(() => import('@/pages/mainTabs/NetworkSecurity/SegmentZeroTrust/Basics/ZeroTrust/IdentityAndMicroperimeters'));

const ZeroTrust: RouteObject[] = [
  {
    path: '/segmentation/basics/zero-trust/principles',
    element: <Principles />,
  },
  {
    path: '/segmentation/basics/zero-trust/identity-microperimeters',
    element: <IdentityAndMicroperimeters />,
  },
];

export default ZeroTrust;

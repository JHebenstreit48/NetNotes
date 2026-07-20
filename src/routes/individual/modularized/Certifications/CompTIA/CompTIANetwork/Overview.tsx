import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WhatIsNetwork = lazy(() => import('@/Pages/MainTabs/Certifications/CompTIA/CompTIANetwork/Overview/WhatIsNetwork'));
const WhyGetNetworkCertified = lazy(() => import('@/Pages/MainTabs/Certifications/CompTIA/CompTIANetwork/Overview/WhyGetNetworkCertified'));

const Overview: RouteObject[] = [
  {
    path: '/certifications/comptia/networkplus/overview',
    element: <WhatIsNetwork />,
  },
  {
    path: '/certifications/comptia/networkplus/why-certify',
    element: <WhyGetNetworkCertified />,
  },
];

export default Overview;

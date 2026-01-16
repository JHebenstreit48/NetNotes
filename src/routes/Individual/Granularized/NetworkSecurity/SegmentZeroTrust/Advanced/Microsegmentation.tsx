import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HostHypervisorControls = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/SegmentZeroTrust/Advanced/Microsegmentation/HostHypervisorControls'));
const TrustSecSGT = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/SegmentZeroTrust/Advanced/Microsegmentation/TrustSecSGT'));

const Microsegmentation: RouteObject[] = [
  {
    path: '/segmentation/advanced/microseg/host-hypervisor',
    element: <HostHypervisorControls />,
  },
  {
    path: '/segmentation/advanced/microseg/trustsec-sgt',
    element: <TrustSecSGT />,
  },
];

export default Microsegmentation;

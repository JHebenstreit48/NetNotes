import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VLANsVsVRFs = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/SegmentZeroTrust/Basics/Segmentation/VLANsVsVRFs'));
const NorthSouthVsEastWest = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/SegmentZeroTrust/Basics/Segmentation/NorthSouthVsEastWest'));

const Segmentation: RouteObject[] = [
  {
    path: '/segmentation/basics/segmentation/vlans-vs-vrfs',
    element: <VLANsVsVRFs />,
  },
  {
    path: '/segmentation/basics/segmentation/ns-vs-ew',
    element: <NorthSouthVsEastWest />,
  },
];

export default Segmentation;

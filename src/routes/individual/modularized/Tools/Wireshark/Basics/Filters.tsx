import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DisplayFilters = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Basics/Filters/Display'));
const CaptureFilters = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Basics/Filters/Capture'));

const Filters: RouteObject[] = [
  {
    path: '/wireshark/basics/filters/display',
    element: <DisplayFilters />,
  },
  {
    path: '/wireshark/basics/filters/capture',
    element: <CaptureFilters />,
  },
];

export default Filters;

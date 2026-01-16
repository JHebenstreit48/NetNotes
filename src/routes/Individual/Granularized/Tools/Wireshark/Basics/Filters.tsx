import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DisplayFilters = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Basics/Filters/DisplayFilters'));
const CaptureFilters = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Basics/Filters/CaptureFilters'));

const Filters: RouteObject[] = [
  {
    path: '/wireshark/basics/filters/display-filters',
    element: <DisplayFilters />,
  },
  {
    path: '/wireshark/basics/filters/capture-filters',
    element: <CaptureFilters />,
  },
];

export default Filters;

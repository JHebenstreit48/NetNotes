import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/Legacy/OSIModel/Basics/Fundamentals/Introduction'));
const LayersComparison = lazy(() => import('@/pages/mainTabs/Networking/Legacy/OSIModel/Basics/Fundamentals/LayerComparison'));

const Fundamentals: RouteObject[] = [
  {
    path: '/legacy/osi-model/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/legacy/osi-model/basics/fundamentals/layer-comparison',
    element: <LayersComparison />,
  },
];

export default Fundamentals;

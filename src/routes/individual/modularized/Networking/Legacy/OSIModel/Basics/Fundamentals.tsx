import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/Legacy/OSIModel/Basics/Fundamentals/Introduction'));
const ServicesVsProtocols = lazy(
  () => import('@/pages/mainTabs/Networking/Legacy/OSIModel/Basics/Fundamentals/ServicesVsProtocols')
);
const ModelAndLayersComparison = lazy(
  () => import('@/pages/mainTabs/Networking/Legacy/OSIModel/Basics/Fundamentals/ModelAndLayerComparison')
);

const Fundamentals: RouteObject[] = [
  {
    path: '/networking/legacy/osi-model/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/networking/legacy/osi-model/basics/fundamentals/services-vs-protocols',
    element: <ServicesVsProtocols />,
  },
  {
    path: '/networking/legacy/osi-model/basics/fundamentals/layer-comparison',
    element: <ModelAndLayersComparison />,
  },
];

export default Fundamentals;
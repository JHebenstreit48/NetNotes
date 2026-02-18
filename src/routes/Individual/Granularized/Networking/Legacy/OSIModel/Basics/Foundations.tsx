import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ModelAndTerms = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/OSIModel/Basics/Foundations/ModelAndTerms'));
const ServicesVsProtocols = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/OSIModel/Basics/Foundations/ServicesVsProtocols'));

const Foundations: RouteObject[] = [
  {
    path: '/legacy/osi-model/basics/foundations/model-and-terms',
    element: <ModelAndTerms />,
  },
  {
    path: '/legacy/osi-model/basics/foundations/services-vs-protocols',
    element: <ServicesVsProtocols />,
  },
];

export default Foundations;

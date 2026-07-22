import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PhysicalVsLogical = lazy(() => import('@/pages/mainTabs/Networking/Foundations/Advanced/DiagramsAndDocs/PhysicalVsLogical'));
const NamingAndLabeling = lazy(() => import('@/pages/mainTabs/Networking/Foundations/Advanced/DiagramsAndDocs/NamingAndLabeling'));

const DiagramsAndDocs: RouteObject[] = [
  {
    path: '/foundations/advanced/diagrams-and-docs/physical-vs-logical',
    element: <PhysicalVsLogical />,
  },
  {
    path: '/foundations/advanced/diagrams-and-docs/naming-and-labeling',
    element: <NamingAndLabeling />,
  },
];

export default DiagramsAndDocs;

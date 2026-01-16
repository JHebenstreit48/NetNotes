import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PhysicalVsLogical = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Advanced/DiagramsAndDocs/PhysicalVsLogical'));
const NamingAndLabeling = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Advanced/DiagramsAndDocs/NamingAndLabeling'));

const DiagramsAndDocs: RouteObject[] = [
  {
    path: '/fundamentals/advanced/diagrams-and-docs/physical-vs-logical',
    element: <PhysicalVsLogical />,
  },
  {
    path: '/fundamentals/advanced/diagrams-and-docs/naming-and-labeling',
    element: <NamingAndLabeling />,
  },
];

export default DiagramsAndDocs;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TP0TP2 = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/OSIModel/Advanced/TransportClasses/TP0TP2'));
const TP3TP4 = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/OSIModel/Advanced/TransportClasses/TP3TP4'));

const TransportClasses: RouteObject[] = [
  {
    path: '/coreconcepts/osimodel/advanced/transport-classes/tp0-tp2',
    element: <TP0TP2 />,
  },
  {
    path: '/coreconcepts/osimodel/advanced/transport-classes/tp3-tp4',
    element: <TP3TP4 />,
  },
];

export default TransportClasses;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/OSIModel/Layers/Network/Overview')
);
const AddressingAndRouting = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/OSIModel/Layers/Network/AddressingAndRouting')
);

const Network: RouteObject[] = [
    {
        path: '/coreconcepts/basics/osimodel/layers/network/overview',
        element: <Overview />
    },
    {
      path: '/coreconcepts/basics/osimodel/layers/network/routing',
      element: <AddressingAndRouting />
    }
];

export default Network;
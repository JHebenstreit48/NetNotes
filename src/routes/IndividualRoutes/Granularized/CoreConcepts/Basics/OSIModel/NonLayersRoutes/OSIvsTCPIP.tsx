import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/OSIModel/OSIvsTCPIP/Overview')
);

const OSIvsTCPIP: RouteObject[] = [
    {
        path: '/coreconcepts/basics/osimodel/osivstcpip/overview',
        element: <Overview />,
    }
];

export default OSIvsTCPIP;
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ReqIndRespConf = lazy(() => import('@/pages/MainTabs/Networking/Legacy/OSIModel/Basics/ServicePrimitives/ReqIndRespConf'));
const EncapsulationPath = lazy(() => import('@/pages/MainTabs/Networking/Legacy/OSIModel/Basics/ServicePrimitives/EncapsulationPath'));

const ServicePrimitives: RouteObject[] = [
  {
    path: '/coreconcepts/osimodel/basics/service-primitives/req-ind-resp-conf',
    element: <ReqIndRespConf />,
  },
  {
    path: '/coreconcepts/osimodel/basics/service-primitives/encapsulation-path',
    element: <EncapsulationPath />,
  },
];

export default ServicePrimitives;

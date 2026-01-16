import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OSITCPIPMap = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/OSIModel/Advanced/InterworkingAndMapping/OSITCPIPMap'));
const GatewaysAndTranslate = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/OSIModel/Advanced/InterworkingAndMapping/GatewaysAndTranslate'));

const InterworkingAndMapping: RouteObject[] = [
  {
    path: '/coreconcepts/osimodel/advanced/interworking-and-mapping/osi-to-tcpip-map',
    element: <OSITCPIPMap />,
  },
  {
    path: '/coreconcepts/osimodel/advanced/interworking-and-mapping/gateways-and-translate',
    element: <GatewaysAndTranslate />,
  },
];

export default InterworkingAndMapping;

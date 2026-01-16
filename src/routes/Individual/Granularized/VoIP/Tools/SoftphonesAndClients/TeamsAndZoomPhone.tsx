import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SIPGatewaysAndInterop = lazy(() => import('@/Pages/MainTabs/VoIP/Tools/SoftphonesAndClients/TeamsAndZoomPhone/SIPGatewaysAndInterop'));
const CallQualityMOSAndCAC = lazy(() => import('@/Pages/MainTabs/VoIP/Tools/SoftphonesAndClients/TeamsAndZoomPhone/CallQualityMOSAndCAC'));

const TeamsAndZoomPhone: RouteObject[] = [
  {
    path: '/tools/softphones/clients/teams-zoom/sip-gateways',
    element: <SIPGatewaysAndInterop />,
  },
  {
    path: '/tools/softphones/clients/teams-zoom/quality-mos-cac',
    element: <CallQualityMOSAndCAC />,
  },
];

export default TeamsAndZoomPhone;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VVXTrioOverview = lazy(() => import('@/Pages/MainTabs/VoIP/Tools/VoIPDeskPhones/PolycomDeskPhones/VVXTrioOverview'));
const ModelsDirectory = lazy(() => import('@/Pages/MainTabs/VoIP/Tools/VoIPDeskPhones/PolycomDeskPhones/ModelsDirectory'));

const PolycomDeskPhones: RouteObject[] = [
  {
    path: '/tools/endpoints/deskphones/polycom/vvx-trio-overview',
    element: <VVXTrioOverview />,
  },
  {
    path: '/tools/endpoints/deskphones/polycom/models-directory',
    element: <ModelsDirectory />,
  },
];

export default PolycomDeskPhones;

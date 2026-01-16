import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OverviewAndFamilies = lazy(() => import('@/Pages/MainTabs/VoIP/Tools/VoIPDeskPhones/CiscoDeskPhones/OverviewAndFamilies'));
const ModelsDirectory = lazy(() => import('@/Pages/MainTabs/VoIP/Tools/VoIPDeskPhones/CiscoDeskPhones/ModelsDirectory'));

const CiscoDeskPhones: RouteObject[] = [
  {
    path: '/tools/endpoints/deskphones/cisco/overview-families',
    element: <OverviewAndFamilies />,
  },
  {
    path: '/tools/endpoints/deskphones/cisco/models-directory',
    element: <ModelsDirectory />,
  },
];

export default CiscoDeskPhones;

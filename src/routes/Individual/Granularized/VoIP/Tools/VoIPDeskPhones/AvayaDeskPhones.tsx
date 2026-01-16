import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JSeriesAndPlatforms = lazy(() => import('@/Pages/MainTabs/VoIP/Tools/VoIPDeskPhones/AvayaDeskPhones/JSeriesAndPlatforms'));
const ModelsDirectory = lazy(() => import('@/Pages/MainTabs/VoIP/Tools/VoIPDeskPhones/AvayaDeskPhones/ModelsDirectory'));

const AvayaDeskPhones: RouteObject[] = [
  {
    path: '/tools/endpoints/deskphones/avaya/j-series-platforms',
    element: <JSeriesAndPlatforms />,
  },
  {
    path: '/tools/endpoints/deskphones/avaya/models-directory',
    element: <ModelsDirectory />,
  },
];

export default AvayaDeskPhones;

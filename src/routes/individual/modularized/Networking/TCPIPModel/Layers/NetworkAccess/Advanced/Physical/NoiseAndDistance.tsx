import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AttenuationAndDistance = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NoiseAndDistance/AttenuationAndDistance'));
const CrosstalkAndEMI = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NoiseAndDistance/CrosstalkAndEMI'));

const NoiseAndDistance: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/network-access/advanced/physical/noise-and-distance/attenuation-and-distance',
    element: <AttenuationAndDistance />,
  },
  {
    path: '/networking/tcp-ip-model/layers/network-access/advanced/physical/noise-and-distance/crosstalk-and-emi',
    element: <CrosstalkAndEMI />,
  },
];

export default NoiseAndDistance;
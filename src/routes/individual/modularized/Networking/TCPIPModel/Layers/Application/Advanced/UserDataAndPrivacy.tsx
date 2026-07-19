import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DataCollectionTypes = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Application/Advanced/UserDataAndPrivacy/DataCollectionTypes'));
const PrivacyInApplicationProtocols = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Application/Advanced/UserDataAndPrivacy/PrivacyInApplicationProtocols'));

const UserDataAndPrivacy: RouteObject[] = [
  {
    path: '/tcpip-model/layers/application/advanced/user-data/data-collection-types',
    element: <DataCollectionTypes />,
  },
  {
    path: '/tcpip-model/layers/application/advanced/user-data/privacy-in-protocols',
    element: <PrivacyInApplicationProtocols />,
  },
];

export default UserDataAndPrivacy;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DataCollectionTypes = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Application/Advanced/UserDataAndPrivacy/DataCollectionTypes'));
const PrivacyInApplicationProtocols = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Application/Advanced/UserDataAndPrivacy/PrivacyInApplicationProtocols'));

const UserDataAndPrivacy: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/application/advanced/user-data/data-collection-types',
    element: <DataCollectionTypes />,
  },
  {
    path: '/networking/tcp-ip-model/layers/application/advanced/user-data/privacy-in-protocols',
    element: <PrivacyInApplicationProtocols />,
  },
];

export default UserDataAndPrivacy;

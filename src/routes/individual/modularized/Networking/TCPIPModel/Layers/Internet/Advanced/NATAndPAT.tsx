import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ConceptsAndTypes = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Advanced/NATAndPAT/ConceptsAndTypes'));
const UseCasesAndLimits = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Internet/Advanced/NATAndPAT/UseCasesAndLimits'));

const NATAndPAT: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/internet/nat-and-pat/concepts-and-types',
    element: <ConceptsAndTypes />,
  },
  {
    path: '/networking/tcp-ip-model/layers/internet/nat-and-pat/use-cases-and-limits',
    element: <UseCasesAndLimits />,
  },
];

export default NATAndPAT;

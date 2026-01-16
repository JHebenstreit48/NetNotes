import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ConceptsAndTypes = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Internet/Advanced/NATAndPAT/ConceptsAndTypes'));
const UseCasesAndLimits = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Internet/Advanced/NATAndPAT/UseCasesAndLimits'));

const NATAndPAT: RouteObject[] = [
  {
    path: '/tcpip-model/layers/internet/nat-and-pat/concepts-and-types',
    element: <ConceptsAndTypes />,
  },
  {
    path: '/tcpip-model/layers/internet/nat-and-pat/use-cases-and-limits',
    element: <UseCasesAndLimits />,
  },
];

export default NATAndPAT;

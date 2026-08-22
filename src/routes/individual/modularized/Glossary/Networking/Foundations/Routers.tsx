import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GatewaysAndDefaultGateways = lazy(
  () => import('@/pages/mainTabs/Glossary/Networking/Foundations/Routers/GatewaysAndDefaultGateways')
);

const Routers: RouteObject[] = [
  {
    path: 'glossary/networking/foundations/routers/gateways-and-default-gateway',
    element: <GatewaysAndDefaultGateways />,
  }
];

export default Routers;
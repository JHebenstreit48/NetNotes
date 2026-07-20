import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProtocolInspectors = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Advanced/SimulationAnalysis/ProtocolInspectors'));
const EventWorkflows = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Advanced/SimulationAnalysis/EventWorkflows'));

const SimulationAnalysis: RouteObject[] = [
  {
    path: '/packettracer/advanced/simulation-analysis/protocol-inspectors',
    element: <ProtocolInspectors />,
  },
  {
    path: '/packettracer/advanced/simulation-analysis/event-workflows',
    element: <EventWorkflows />,
  },
];

export default SimulationAnalysis;

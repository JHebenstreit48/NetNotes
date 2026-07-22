import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RealtimeVsSimulation = lazy(() => import('@/pages/mainTabs/Tools/CiscoPacketTracer/Basics/Modes/RealtimeVsSimulation'));
const EventListAndCustomPDU = lazy(() => import('@/pages/mainTabs/Tools/CiscoPacketTracer/Basics/Modes/EventListAndCustomPDU'));

const Modes: RouteObject[] = [
  {
    path: '/packettracer/basics/modes/realtime-vs-simulation',
    element: <RealtimeVsSimulation />,
  },
  {
    path: '/packettracer/basics/modes/event-list-and-custom-pdu',
    element: <EventListAndCustomPDU />,
  },
];

export default Modes;

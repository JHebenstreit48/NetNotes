import type { Subpage } from '@/types/navigation';

const Modes: Subpage = {
  name: 'Modes',
  subpages: [
    {
      name: 'Realtime vs Simulation',
      path: '/tools/cisco-packet-tracer/basics/modes/realtime-vs-simulation',
    },
    {
      name: 'Event List & Custom PDU',
      path: '/tools/cisco-packet-tracer/basics/modes/event-list-and-custom-pdu',
    },
  ],
};

export default Modes;
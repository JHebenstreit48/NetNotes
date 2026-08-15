import type { Subpage } from '@/types/navigation';

const SimulationAnalysis: Subpage = {
  name: 'Simulation Analysis',
  subpages: [
    {
      name: 'Protocol Inspectors',
      path: '/tools/cisco-packet-tracer/advanced/simulation-analysis/protocol-inspectors',
    },
    {
      name: 'Event Workflows',
      path: '/tools/cisco-packet-tracer/advanced/simulation-analysis/event-workflows',
    }
  ]
};

export default SimulationAnalysis;
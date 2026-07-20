import type { Subpage } from '@/types/navigation';

const DevicesAndModels: Subpage = {
  name: 'Devices & Models',
  subpages: [
    {
      name: 'Networking Devices Overview',
      path: '/glossary/networking/foundations/devices-and-models/networking-devices-overview',
    },
    {
      name: 'Hub vs Switch vs Router',
      path: '/glossary/networking/foundations/devices-and-models/hub-vs-switch-vs-router',
    },
    {
      name: 'Layered Models',
      path: '/glossary/networking/foundations/devices-and-models/layered-models',
    },
    // Future:
    // { name: 'Switches', path: '...' },   ← if you later want to split switches out
    // { name: 'Access Points & Wireless Devices', path: '...' },
  ],
};

export default DevicesAndModels;
import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Connecting',
      subpages: [
        {
          name: 'Serial Sessions',
          path: '/tools-and-testing/tools/terminal-emulators/putty/basics/connecting/serial-sessions',
        },
        {
          name: 'Serial Settings',
          path: '/tools-and-testing/tools/terminal-emulators/putty/basics/connecting/serial-settings',
        },
        {
          name: 'SSH & Telnet Sessions',
          path: '/tools-and-testing/tools/terminal-emulators/putty/basics/connecting/ssh-and-telnet-sessions',
        },
      ],
    },
    {
      name: 'Sessions & Output',
      subpages: [
        {
          name: 'Saving Sessions',
          path: '/tools-and-testing/tools/terminal-emulators/putty/basics/sessions-and-output/saving-sessions',
        },
        {
          name: 'Logging',
          path: '/tools-and-testing/tools/terminal-emulators/putty/basics/sessions-and-output/logging',
        },
      ],
    },
  ],
};

export default Basics;
import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Basics/Fundamentals';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    {
      name: "Workspace & Views",
      subpages: [
        {
          name: "Logical vs Physical",
          path: "/tools/cisco-packet-tracer/basics/workspace-and-views/logical-vs-physical"
        },
        {
          name: "Device Config Tabs",
          path: "/tools/cisco-packet-tracer/basics/workspace-and-views/device-config-tabs"
        }
      ]
    },
    {
      name: "Modes",
      subpages: [
        {
          name: "Realtime vs Simulation",
          path: "/tools/cisco-packet-tracer/basics/modes/realtime-vs-simulation"
        },
        {
          name: "Event List & Custom PDU",
          path: "/tools/cisco-packet-tracer/basics/modes/event-list-and-custom-pdu"
        }
      ]
    },
    {
      name: "Devices & Cabling",
      subpages: [
        {
          name: "Palette & Modules",
          path: "/tools/cisco-packet-tracer/basics/devices-and-cabling/palette-and-modules"
        },
        {
          name: "Cabling & Console",
          path: "/tools/cisco-packet-tracer/basics/devices-and-cabling/cabling-and-console"
        }
      ]
    },
    {
      name: "Configuration Basics",
      subpages: [
        {
          name: "CLI Access",
          path: "/tools/cisco-packet-tracer/basics/configuration-basics/cli-access"
        },
        {
          name: "Startup/Running Files",
          path: "/tools/cisco-packet-tracer/basics/configuration-basics/startup-and-running-files"
        }
      ]
    }
  ]
};

export default Basics;
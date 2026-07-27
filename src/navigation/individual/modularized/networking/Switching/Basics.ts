import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Layer 2 Switching",
          path: "/networking/switching/basics/fundamentals/layer-2-switching"
        },
        {
          name: "MAC Address Table",
          path: "/networking/switching/basics/fundamentals/mac-address-table"
        }
      ]
    },
    {
      name: "Hardware & Port Types",
      subpages: [
        {
          name: "Switches and Connectors",
          path: "/networking/switching/basics/hardware-and-port-types/switches-and-connectors"
        },
        {
          name: "Ethernet Speed History",
          path: "/networking/switching/basics/hardware-and-port-types/ethernet-speed-history"
        }
      ]
    }
  ]
};

export default Basics;
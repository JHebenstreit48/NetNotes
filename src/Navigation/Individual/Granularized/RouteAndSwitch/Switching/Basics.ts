import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Layer 2 Switching",
          path: "/switching/basics/fundamentals/layer-2-switching"
        },
        {
          name: "MAC Address Table",
          path: "/switching/basics/fundamentals/mac-address-table"
        }
      ]
    },
    {
      name: "Hardware & History",
      subpages: [
        {
          name: "Switches and Connectors",
          path: "/switching/basics/hardware-and-history/switches-and-connectors"
        },
        {
          name: "Ethernet Speed History",
          path: "/switching/basics/hardware-and-history/ethernet-speed-history"
        }
      ]
    }
  ]
};

export default Basics;
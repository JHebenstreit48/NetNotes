import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Install & Profiles",
          path: "/tools-and-testing/tools/wireshark/basics/fundamentals/install-and-profiles"
        },
        {
          name: "Capture Interfaces",
          path: "/tools-and-testing/tools/wireshark/basics/fundamentals/capture-interfaces"
        }
      ]
    },
    {
      name: "Filters",
      subpages: [
        {
          name: "Display",
          path: "/tools-and-testing/tools/wireshark/basics/filters/display"
        },
        {
          name: "Capture",
          path: "/tools-and-testing/tools/wireshark/basics/filters/capture"
        }
      ]
    },
    {
      name: "Views & Tools",
      subpages: [
        {
          name: "Packet/Bytes/Tree",
          path: "/tools-and-testing/tools/wireshark/basics/views-and-tools/packet-bytes-tree"
        },
        {
          name: "IO Graphs & Stats",
          path: "/tools-and-testing/tools/wireshark/basics/views-and-tools/io-graphs-and-stats"
        }
      ]
    }
  ]
};

export default Basics;
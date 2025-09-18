import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Layer 2: Data Link",
      subpages: [
        {
          name: "Core Concepts",
          subpages: [
            {
              name: "Introduction",
              path: "/tcpip-model/network-access/data-link/core-concepts/introduction"
            },
            {
              name: "Burned-In Address (BIA)",
              path: "/tcpip-model/network-access/data-link/core-concepts/bia"
            },
            {
              name: "Address Resolution Protocol (ARP)",
              path: "/tcpip-model/network-access/data-link/core-concepts/arp"
            }
          ]
        },
        {
          name: "Frames & Addressing",
          subpages: [
            {
              name: "MAC Addressing",
              path: "/tcpip-model/network-access/data-link/frames-and-addressing/mac-addressing"
            },
            {
              name: "Ethernet Frame Fields",
              path: "/tcpip-model/network-access/data-link/frames-and-addressing/ethernet-frame-fields"
            }
          ]
        }
      ]
    },
    {
      name: "Layer 1: Physical",
      subpages: [
        {
          name: "Signals & Media",
          subpages: [
            {
              name: "Introduction",
              path: "/tcpip-model/network-access/physical/signals-and-media/introduction"
            },
            {
              name: "Bit/Digital Signals",
              path: "/tcpip-model/network-access/physical/signals-and-media/bit-digital-signals"
            }
          ]
        },
        {
          name: "Transmission Concepts",
          subpages: [
            {
              name: "Communication Standards",
              path: "/tcpip-model/network-access/physical/transmission/communication-standards"
            },
            {
              name: "Data Transmission Methods",
              path: "/tcpip-model/network-access/physical/transmission/data-transmission-methods"
            }
          ]
        },
        {
          name: "Bandwidth & Throughput",
          subpages: [
            {
              name: "Bandwidth",
              path: "/tcpip-model/network-access/physical/bandwidth-and-throughput/bandwidth"
            },
            {
              name: "Throughput",
              path: "/tcpip-model/network-access/physical/bandwidth-and-throughput/throughput"
            }
          ]
        },
        {
          name: "Encap/De-encap",
          subpages: [
            {
              name: "Encapsulation",
              path: "/tcpip-model/network-access/physical/encap-deencap/encapsulation"
            },
            {
              name: "De-encapsulation",
              path: "/tcpip-model/network-access/physical/encap-deencap/de-encapsulation"
            }
          ]
        }
      ]
    }
  ]
};

export default Basics;
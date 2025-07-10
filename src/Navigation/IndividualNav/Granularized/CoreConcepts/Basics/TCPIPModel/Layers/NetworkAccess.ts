import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const NetworkAccess: Subpage = {
  name: "Network Access Layer",
  subpages: [
    {
      name: "Layer 2: Data Link",
      subpages: [
        {
          name: "Core Concepts",
          subpages: [
            {
              name: "Introduction",
              path: "/coreconcepts/basics/tcpipmodel/networkaccess/datalink/coreconcepts/introduction"
            },
            {
              name: "Burned-In Address (BIA)",
              path: "/coreconcepts/basics/tcpipmodel/networkaccess/datalink/coreconcepts/bia"
            },
            {
              name: "Address Resolution Protocol (ARP)",
              path: "/coreconcepts/basics/tcpipmodel/networkaccess/datalink/coreconcepts/arp"
            }
          ]
        }
      ]
    },
    {
      name: "Layer 1: Physical",
      subpages: [
        {
          name: "Signals/Media",
          subpages: [
            {
              name: "Introduction",
              path: "/corenetworking/tcpipmodel/networkaccess/physical/signalsmedia/datarep"
            },
            {
              name: "Bit/Digital Signals",
              path: "/corenetworking/tcpipmodel/networkaccess/physical/signalsmedia/bitdigital"
            }
          ]
        },
        {
          name: "Transmission Concepts",
          subpages: [
            {
              name: "Communication Standards",
              path: "/corenetworking/tcpipmodel/networkaccess/physical/transmission/standardsofcomm"
            },
            {
              name: "Data Transmission Methods",
              path: "/corenetworking/tcpipmodel/networkaccess/physical/transmission/datatransmission"
            },
            {
              name: "Encapsulation / De-encapsulation",
              path: "/corenetworking/tcpipmodel/networkaccess/physical/transmission/encapanddeencap"
            }
          ]
        }
      ]
    }
  ]
};

export default NetworkAccess;
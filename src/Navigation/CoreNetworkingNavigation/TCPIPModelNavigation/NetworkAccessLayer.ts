import { Subpage } from "@/Navigation/NavigationTypes";

const NetworkAccessLayer: Subpage = {
  name: "Network Access Layer (OSI Layers 1-2)",
  subpages: [
    {
      name: "Layer 2: Data Link",
      subpages: [
        {
          name: "Overview",
          path: "/corenetworking/tcpipmodel/networkaccesslayer/overview"
        },
        {
          name: "Burned-In Address (BIA)",
          path: "/corenetworking/tcpipmodel/networkaccesslayer/bia"
        },
        {
          name: "Address Resolution Protocol (ARP)",
          path: "/corenetworking/tcpipmodel/networkaccesslayer/arp"
        },
      ],
    },
    {
      name: "Layer 1: Physical",
      subpages: [
        {
          name: "Overview",
          path: "/corenetworking/tcpipmodel/networkaccesslayer/overview"
        },
        {
          name: "Data Representation",
          path: "/corenetworking/tcpipmodel/networkaccesslayer/datarepresentation"
        },
        {
          name: "Communication Standards",
          path: "/corenetworking/tcpipmodel/networkaccesslayer/standardsofcommunication"
        },
        {
          name: "Encapsulation/De-encapsulation",
          path: "/corenetworking/tcpipmodel/networkaccesslayer/encapsulationanddeencapsulation"
        },
        {
          name: "The Bit and Digital Signals",
          path: "/corenetworking/tcpipmodel/networkaccesslayer/bitanddigitalsignals"
        },
        {
          name: "Data Transmission Methods",
          path: "/corenetworking/tcpipmodel/networkaccesslayer/datatransmissionmethods"
        },
      ],
    },
  ],
};

export default NetworkAccessLayer;

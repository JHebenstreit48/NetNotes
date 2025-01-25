import { Subpage } from "@/Navigation/NavigationTypes";

const NetworkAccessLayer: Subpage = {
  name: "Network Access Layer (OSI Layers 1-2)",
  subpages: [
    {
      name: "Layer 2: Data Link",
      subpages: [
        { name: "Overview", path: "/corenetworking/tcpipmodel/datalinklayer/overview" },
        { name: "Burned-In Address (BIA)", path: "/corenetworking/tcpipmodel/datalinklayer/bia" },
        { name: "Address Resolution Protocol (ARP)", path: "/corenetworking/tcpipmodel/datalinklayer/arp" },
      ],
    },
    {
      name: "Layer 1: Physical",
      subpages: [
        { name: "Overview", path: "/corenetworking/tcpipmodel/physicallayer/overview" },
        { name: "Data Representation", path: "/corenetworking/tcpipmodel/physicallayer/datarepresentation" },
        { name: "Communication Standards", path: "/corenetworking/tcpipmodel/physicallayer/standardsofcommunication" },
        { name: "Encapsulation/De-encapsulation", path: "/corenetworking/tcpipmodel/physicallayer/encapsulationanddeencapsulation" },
      ],
    },
  ],
};

export default NetworkAccessLayer;

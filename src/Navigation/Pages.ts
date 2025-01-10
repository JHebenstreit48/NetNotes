import { Page } from "@/Navigation/NavigationTypes";
import IPNetworkingOverview from "@/Navigation/CoreNetworkingNavigation/IPNetworkingOverview"
import OSIModel from "@/Navigation/CoreNetworkingNavigation/OSIModel";
import Wireshark from "./NetworkingToolsNavigation/Wireshark";
import CiscoPacketTracer from "./NetworkingToolsNavigation/CiscoPacketTracer";
import TCPIPModel from "./CoreNetworkingNavigation/TCPIPModel";
import GNS3Setup from "./NetworkingToolsNavigation/GNS3Setup";

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "Certifications Overview",
    subpages: [

    ],
  },
  {
    name: "Exam Preparation",
    subpages: [

    ],
  },
  {
    name: "Networking Tools",
    subpages: [
      Wireshark, CiscoPacketTracer, GNS3Setup,
    ],
  },
  {
    name: "Core Networking",
    subpages: [
      IPNetworkingOverview,
      OSIModel, TCPIPModel,
    ],
  },
  {
    name: "CCNP Advanced",
    subpages: [

    ],
  },
];

export default pages;

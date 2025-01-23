import { Page } from "@/Navigation/NavigationTypes";
import IPNetworkingOverview from "@/Navigation/CoreNetworkingNavigation/IPNetworkingOverview";
import OSIModel from "@/Navigation/CoreNetworkingNavigation/OSIModel";
import Wireshark from "./NetworkingToolsNavigation/Wireshark";
import CiscoPacketTracer from "./NetworkingToolsNavigation/CiscoPacketTracer";
import TCPIPModel from "./CoreNetworkingNavigation/TCPIPModelNavigation/TCPIPModel";
import GNS3Setup from "./NetworkingToolsNavigation/GNS3Setup";
import L2Switching from "./CoreNetworkingNavigation/SwitchingNavigation/L2Switching";

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "Certifications Overview",
    subpages: [],
  },
  {
    name: "Exam Preparation",
    subpages: [],
  },
  {
    name: "Networking Tools",
    subpages: [Wireshark, CiscoPacketTracer, GNS3Setup],
  },
  {
    name: "Core Networking Concepts",
    subpages: [IPNetworkingOverview, OSIModel, TCPIPModel, L2Switching],
  },
  {
    name: "CCNP Advanced",
    subpages: [],
  },
];

export default pages;

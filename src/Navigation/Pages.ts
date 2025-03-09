import { Page } from "@/Navigation/NavigationTypes";
import NetworkingOverview from "@/Navigation/CoreNetworkingNavigation/NetworkingBasics/Overview";
import OSIModel from "@/Navigation/CoreNetworkingNavigation/OSIModel/OSIModel";
import Wireshark from "@/Navigation/NetworkingToolsNavigation/Wireshark";
import CiscoPacketTracer from "@/Navigation/NetworkingToolsNavigation/CiscoPacketTracer";
import GNS3Setup from "@/Navigation/NetworkingToolsNavigation/GNS3Setup";
import L2Switching from "@/Navigation/CoreNetworkingNavigation/SwitchingNavigation/L2Switching";
import VLANs from "@/Navigation/CoreNetworkingNavigation/SwitchingNavigation/VLANs";
import ApplicationLayer from "@/Navigation/CoreNetworkingNavigation/TCPIPModelNavigation/ApplicationLayer";
import TransportLayer from "@/Navigation/CoreNetworkingNavigation/TCPIPModelNavigation/TransportLayer";
import InternetLayer from "@/Navigation/CoreNetworkingNavigation/TCPIPModelNavigation/InternetLayer";
import NetworkAccessLayer from "@/Navigation/CoreNetworkingNavigation/TCPIPModelNavigation/NetworkAccessLayer";

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
    subpages: [
      NetworkingOverview,
      OSIModel,
      {
        name: "TCP/IP Model",
        subpages: [
          ApplicationLayer,
          TransportLayer,
          InternetLayer,
          NetworkAccessLayer
        ],
      },
      {
        name: "Layer 2 Switching",
        subpages: [L2Switching, VLANs],
      },
    ],
  },
  {
    name: "CCNP Advanced",
    subpages: [],
  },
];

export default pages;

import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/Error";
import Home from "@/Pages/Home";

// Neworking Tools Start
import Wireshark from "@/Pages/NetworkingTools/Wireshark";

// Networking Tools End

// Core Networking Topics Start

// IP Networking Overview Start
import IPNetworkingOverview from "@/Pages/CoreNetworkingTopics/IPNetworkingOverview/Overview";
// IP Networking Overview End

// TCP/IP Model Start

// Application Layer Start
import ApplicationLayerOverview from "@/Pages/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/Overview";
import HTTPHTTPS from "@/Pages/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/HTTPHTTPS";
import DNS from "@/Pages/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/DNS";
// Application Layer End

// Transport Layer Start
import TransportLayerOverview from "@/Pages/CoreNetworkingTopics/TCPIPModel/TransportLayer/Overview";
import TCPvsUDP from "@/Pages/CoreNetworkingTopics/TCPIPModel/TransportLayer/TCPvsUDP";
// Transport Layer End

// Internet Layer Start
import InternetLayerOverview from "@/Pages/CoreNetworkingTopics/TCPIPModel/InternetLayer/Overview";
import IPV4vsIPV6 from "@/Pages/CoreNetworkingTopics/TCPIPModel/InternetLayer/IPV4vsIPV6";
import SubnetMaskAndGateway from "@/Pages/CoreNetworkingTopics/TCPIPModel/InternetLayer/SubnetMaskAndGateway";
// Internet Layer End

// Data Link Layer Start
import DataLinkLayerOverview from "@/Pages/CoreNetworkingTopics/TCPIPModel/DataLinkLayer/Overview";
import BIA from "@/Pages/CoreNetworkingTopics/TCPIPModel/DataLinkLayer/BIA";
import ARP from "@/Pages/CoreNetworkingTopics/TCPIPModel/DataLinkLayer/ARP";
// Data Link Layer End

// Physical Layer Start
import PhysicalLayerOverview from "@/Pages/CoreNetworkingTopics/TCPIPModel/PhysicalLayer/Overview";
import DataRepresentation from "@/Pages/CoreNetworkingTopics/TCPIPModel/PhysicalLayer/DataRepresentation";
import StandardsOfCommunication from "@/Pages/CoreNetworkingTopics/TCPIPModel/PhysicalLayer/StandardsOfCommunication";
import EncapsulationDeencapsulation from "@/Pages/CoreNetworkingTopics/TCPIPModel/PhysicalLayer/EncapsulationDeencapsulation";
// Physical Layer End

// TCP/IP Model End

// Routing Protocols Start
import StaticRouting from "@/Pages/CoreNetworkingTopics/RoutingProtocols/StaticRouting";
import DynamicRouting from "@/Pages/CoreNetworkingTopics/RoutingProtocols/DynamicRouting";
import RoutingComparisons from "@/Pages/CoreNetworkingTopics/RoutingProtocols/RoutingComparisons";
// Routing Protocols End

// L2 Switching Start

// Switching Start
import SwitchingOverview from "@/Pages/CoreNetworkingTopics/Layer2Switching/Switching/Overview";
import Layer2Switching from "@/Pages/CoreNetworkingTopics/Layer2Switching/Switching/Layer2Switching";
import MACAddressTable from "@/Pages/CoreNetworkingTopics/Layer2Switching/Switching/MACAddressTable";
// Switching End

// VLANs Start
import VLANOverview from "@/Pages/CoreNetworkingTopics/Layer2Switching/VLAN/VLANOverview";

// VLANs End

// L2 Switching End

// ACLs Start
import StandardACLs from "@/Pages/CoreNetworkingTopics/ACLs/StandardACLs";

// ACLs End

// Wireless Networking Start
import WirelessStandards from "@/Pages/CoreNetworkingTopics/WirelessNetworking/WirelessStandards";

// Wireless Networking End

// Network Security Start
import NetworkSecurity from "@/Pages/NetworkSecurityBasics";

// Network Security End

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // Networking Tools Start
      {
        path: "/tools/wireshark",
        element: <Wireshark />
      },

      // Networking Tools End

      // Core Networking Topics Start
      // IP Networking Overview Start
      {
        path: "/corenetworking/ipnetworking/overview",
        element: <IPNetworkingOverview />
      },
      // IP Networking Overview End

      // Application Layer Start
      {
        path: "/corenetworking/tcpipmodel/applicationlayer/overview",
        element: <ApplicationLayerOverview />
      },
      {
        path: "/corenetworking/tcpipmodel/applicationlayer/httphttps",
        element: <HTTPHTTPS />
      },
      {
        path: "/corenetworking/tcpipmodel/applicationlayer/dns",
        element: <DNS />
      },
      // Application Layer End

      // Transport Layer Start
      {
        path: "/corenetworking/tcpipmodel/transportlayer/overview",
        element: <TransportLayerOverview />
      },
      {
        path: "/corenetworking/tcpipmodel/transportlayer/tcpvsudp",
        element: <TCPvsUDP />
      },
      // Transport Layer End

      // Internet Layer Start
      {
        path: "//corenetworking/tcpipmodel/internetlayer/overview",
        element: <InternetLayerOverview />
      },
      {
        path: "//corenetworking/tcpipmodel/internetlayer/ipv4vsipv6",
        element: <IPV4vsIPV6 />
      },
      {
        path: "//corenetworking/tcpipmodel/internetlayer/subnetmaskandgateway",
        element: <SubnetMaskAndGateway />
      },
      // Internet Layer End

      // Data Link Layer Start
      {
        path: "//corenetworking/tcpipmodel/datalinklayer/overview",
        element: <DataLinkLayerOverview />
      },
      {
        path: "//corenetworking/tcpipmodel/datalinklayer/bia",
        element: <BIA />
      },
      {
        path: "//corenetworking/tcpipmodel/datalinklayer/arp",
        element: <ARP />
      },
      // Data Link Layer End

      // Physical Layer Start
      {
        path: "//corenetworking/tcpipmodel/physicallayer/overview",
        element: <PhysicalLayerOverview />
      },
      {
        path: "//corenetworking/tcpipmodel/physicallayer/datarepresentation",
        element: <DataRepresentation />
      },
      {
        path: "//corenetworking/tcpipmodel/physicallayer/standardsofcommunication",
        element: <StandardsOfCommunication />
      },
      {
        path: "//corenetworking/tcpipmodel/physicallayer/encapsulationanddeencapsulation",
        element: <EncapsulationDeencapsulation />
      },
      // Physical Layer End

      // Routing Protocols Start
      {
        path: "/corenetworking/routing/staticrouting",
        element: <StaticRouting />
      },
      {
        path: "/corenetworking/routing/dynamicrouting",
        element: <DynamicRouting />
      },
      {
        path: "/corenetworking/routing/comparisons",
        element: <RoutingComparisons />
      },
      // Routing Protocols End

      // Layer 2 Switching Start

      // Switching Start
      {
        path: "/corenetworking/l2switching/switching/overview",
        element: <SwitchingOverview />
      },
      {
        path: "/corenetworking/l2switching/switching/layer2switching",
        element: <Layer2Switching />
      },
      {
        path: "/corenetworking/l2switching/switching/macaddresstable",
        element: <MACAddressTable />
      },
      // Switching End

      // VLANs Start
      {
        path: "/corenetworking/l2switching/vlans/overview",
        element: <VLANOverview />
      },

      // VLANs End

      // Layer 2 Switching End

      // ACLs Start
      {
        path: "/corenetworking/acls/standard",
        element: <StandardACLs />
      },

      // ACLs End

      // Wireless Networking Start
      {
        path: "/corenetworking/wireless/standards",
        element: <WirelessStandards />
      },

      // Wireless Networking End

      // Network Security Start
      {
        path: "/core-networking/security",
        element: <NetworkSecurity />
      },

      // Network Security End

      // Core Networking Topics End
    ],
  },
]);

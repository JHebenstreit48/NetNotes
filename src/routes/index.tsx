import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/Error";
import Home from "@/Pages/Home";

// IP Networking Overview start
import IPNetworkingOverview from "@/Pages/CoreNetworkingTopics/IPNetworkingOverview/Overview";
// IP Networking Overview end

import ACLs from "@/Pages/CoreNetworkingTopics/SwitchingAndVLANs/VLANPages/ACLs";
import WirelessNetworking from "@/Pages/WirelessNetworking";
import NetworkingProtocols from "@/Pages/NetworkingProtocols";
import NetworkSecurity from "@/Pages/NetworkSecurityBasics";
import Wireshark from "@/Pages/NetworkingTools/Wireshark";
import EncapsulationDeencapsulation from "@/Pages/CoreNetworkingTopics/TCPIPModel/PhysicalLayer/EncapsulationDeencapsulation";
import PhysicalLayerOverview from "@/Pages/CoreNetworkingTopics/TCPIPModel/PhysicalLayer/Overview";
import ApplicationLayerOverview from "@/Pages/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/Overview";
import HTTPHTTPS from "@/Pages/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/HTTPHTTPS";
import DNS from "@/Pages/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/DNS";
import TransportLayerOverview from "@/Pages/CoreNetworkingTopics/TCPIPModel/TransportLayer/Overview";
import TCPvsUDP from "@/Pages/CoreNetworkingTopics/TCPIPModel/TransportLayer/TCPvsUDP";
import InternetLayerOverview from "@/Pages/CoreNetworkingTopics/TCPIPModel/InternetLayer/Overview";
import IPV4vsIPV6 from "@/Pages/CoreNetworkingTopics/TCPIPModel/InternetLayer/IPV4vsIPV6";
import SubnetMaskAndGateway from "@/Pages/CoreNetworkingTopics/TCPIPModel/InternetLayer/SubnetMaskAndGateway";
import StaticRouting from "@/Pages/StaticRouting";
import DataLinkLayerOverview from "@/Pages/CoreNetworkingTopics/TCPIPModel/DataLinkLayer/Overview";
import BIA from "@/Pages/CoreNetworkingTopics/TCPIPModel/DataLinkLayer/BIA";
import ARP from "@/Pages/CoreNetworkingTopics/TCPIPModel/DataLinkLayer/ARP";
import SwitchingOverview from "@/Pages/CoreNetworkingTopics/SwitchingAndVLANs/SwitchingPages/SwitchingOverview";

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
      // IP Networking Overview start
      {
        path: "/corenetworking/ipnetworking/overview",
        element: <IPNetworkingOverview />
      },
      // IP Networking Overview end

      // Application Layer start
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
      // Application Layer end

      // Transport Layer start
      {
        path: "/corenetworking/tcpipmodel/transportlayer/overview",
        element: <TransportLayerOverview />
      },
      {
        path: "/corenetworking/tcpipmodel/transportlayer/tcpvsudp",
        element: <TCPvsUDP />
      },
      // Transport Layer end

      // Internet Layer start
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
      // Internet Layer end

      // Data Link Layer start
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
      // Data Link Layer end

      // Physical Layer start
      {
        path: "//corenetworking/tcpipmodel/physicallayer/overview",
        element: <PhysicalLayerOverview />
      },
      // {
      //   path: "//corenetworking/tcpipmodel/physicallayer/datarepresentation",
      //   element: <DataRepresentation />
      // },
      // {
      //   path: "//corenetworking/tcpipmodel/physicallayer/standardsofcommunication",
      //   element: <StandardsofCommunication />
      // },
      {
        path: "//corenetworking/tcpipmodel/physicallayer/encapsulationanddeencapsulation",
        element: <EncapsulationDeencapsulation />
      },
      // Physical Layer end

      // Routing Protocols start


      // Routing Protocols end
      {
        path: "/corenetworking/routing/staticrouting",
        element: <StaticRouting />
      },
      // {
      //   path: "/corenetworking/routing/dynamicrouting",
      //   element: <DynamicRouting />
      // },

      {
        path: "/corenetworking/switchingvlans",
        element: <SwitchingOverview />
      },
      {
        path: "/corenetworking/acls",
        element: <ACLs />
      },
      {
        path: "/corenetworking/wireless",
        element: <WirelessNetworking />
      },
      {
        path: "/corenetworking/protocols",
        element: <NetworkingProtocols />
      },
      {
        path: "/core-networking/security",
        element: <NetworkSecurity />
      },
      {
        path: "/tools/wireshark",
        element: <Wireshark />
      },
    ],
  },
]);

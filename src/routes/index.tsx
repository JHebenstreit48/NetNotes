import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/Error";
import Home from "@/Pages/Home";

import IPNetworkingOverview from "@/Pages/CoreNetworkingTopics/Overview";
import RoutingProtocols from "@/Pages/RoutingProtocols";
import ACLs from "@/Pages/SwitchingAndVLANs/VLANPages/ACLs";
import WirelessNetworking from "@/Pages/WirelessNetworking";
import NetworkingProtocols from "@/Pages/NetworkingProtocols";
import NetworkSecurity from "@/Pages/NetworkSecurityBasics";
import Wireshark from "@/Pages/NetworkingTools/Wireshark";
import EncapsulationDeencapsulation from "@/Pages/CoreNetworkingTopics/PhysicalLayer/EncapsulationDeencapsulation";
import PhysicalLayerOverview from "@/Pages/CoreNetworkingTopics/PhysicalLayer/PhysicalLayerOverview";
import SwitchingBasics from "@/Pages/SwitchingAndVLANs/SwitchingPages/Switching";
import ApplicationLayerOverview from "@/Pages/CoreNetworkingTopics/ApplicationLayer/Overview";
import HTTPHTTPS from "@/Pages/CoreNetworkingTopics/ApplicationLayer/HTTPHTTPS";
import DNS from "@/Pages/CoreNetworkingTopics/ApplicationLayer/DNS";
import TransportLayerOverview from "@/Pages/CoreNetworkingTopics/TransportLayer/Overview";
import TCPvsUDP from "@/Pages/CoreNetworkingTopics/TransportLayer/TCPvsUDP";
import InternetLayerOverview from "@/Pages/CoreNetworkingTopics/InternetLayer/Overview";
import IPV4vsIPV6 from "@/Pages/CoreNetworkingTopics/InternetLayer/IPV4vsIPV6";
import SubnetMaskAndGateway from "@/Pages/CoreNetworkingTopics/InternetLayer/SubnetMaskAndGateway";

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
      // Core Networking Topics
      {
        path: "/corenetworking/ipnetworking/tcpipoverview",
        element: <IPNetworkingOverview />
      },
      {
        path: "/corenetworking/ipnetworking/applicationlayer/overview",
        element: <ApplicationLayerOverview />
      },
      {
        path: "/corenetworking/ipnetworking/applicationlayer/httphttps",
        element: <HTTPHTTPS />
      },
      {
        path: "/corenetworking/ipnetworking/applicationlayer/dns",
        element: <DNS />
      },
      {
        path: "/corenetworking/ipnetworking/transportlayer/overview",
        element: <TransportLayerOverview />
      },
      {
        path: "/corenetworking/ipnetworking/transportlayer/tcpvsudp",
        element: <TCPvsUDP />
      },
      {
        path: "/corenetworking/ipnetworking/internetlayer/overview",
        element: <InternetLayerOverview />
      },
      {
        path: "/corenetworking/ipnetworking/internetlayer/ipv4vsipv6",
        element: <IPV4vsIPV6 />
      },
      {
        path: "/corenetworking/ipnetworking/internetlayer/subnetmaskandgateway",
        element: <SubnetMaskAndGateway />
      },
      {
        path: "/corenetworking/ipnetworking/physicallayer/overview",
        element: <PhysicalLayerOverview />
      },
      {
        path: "/corenetworking/ipnetworking/physicallayer/encapsulationanddeencapsulation",
        element: <EncapsulationDeencapsulation />
      },
      {
        path: "/corenetworking/routing/staticrouting",
        element: <RoutingProtocols />
      },
      {
        path: "/corenetworking/switchingvlans",
        element: <SwitchingBasics />
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

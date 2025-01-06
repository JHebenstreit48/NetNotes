import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/Error";
import Home from "@/Pages/Home";

import IPNetworkingOverview from "@/Pages/CoreNetworkingTopics/IPNetworkingOverview";
import RoutingProtocols from "@/Pages/RoutingProtocols";
import ACLs from "@/Pages/ACLs";
import WirelessNetworking from "@/Pages/WirelessNetworking";
import NetworkingProtocols from "@/Pages/NetworkingProtocols";
import NetworkSecurity from "@/Pages/NetworkSecurityBasics";
import Wireshark from "@/Pages/NetworkingTools/Wireshark";
import EncapsulationDeencapsulation from "@/Pages/CoreNetworkingTopics/PhysicalLayer/EncapsulationDeencapsulation";
import PhysicalLayerOverview from "@/Pages/CoreNetworkingTopics/PhysicalLayer/PhysicalLayerOverview";
import SwitchingBasics from "@/Pages/SwitchingAndVLANs/SwitchingPages/Switching";

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

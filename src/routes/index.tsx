import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/Pages/Error";
import Home from "@/Pages/Home";
import IPNetworkingOverview from "@/Pages/IPNetworkingOverview";
import RoutingProtocols from "@/Pages/RoutingProtocols";
import SwitchingVLANs from "@/Pages/SwitchingVLANs";
import ACLs from "@/Pages/ACLs";
import WirelessNetworking from "@/Pages/WirelessNetworking";
import NetworkingProtocols from "@/Pages/NetworkingProtocols";
import NetworkSecurity from "@/Pages/NetworkSecurityBasics";
import Wireshark from "@/Pages/Wireshark";

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
        path: "/core-networking/ip-networking-overview",
        element: <IPNetworkingOverview />
      },
      {
        path: "/core-networking/routing",
        element: <RoutingProtocols />
      },
      {
        path: "/core-networking/switching-vlans",
        element: <SwitchingVLANs />
      },
      {
        path: "/core-networking/acls",
        element: <ACLs />
      },
      {
        path: "/core-networking/wireless",
        element: <WirelessNetworking />
      },
      {
        path: "/core-networking/protocols",
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

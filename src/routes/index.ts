import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/Error";
import Home from "../Pages/Home";
import { createElement } from "react";
import IPNetworkingOverview from "../Pages/IPNetworkingOverview";
import RoutingProtocols from "../Pages/RoutingProtocols";
import SwitchingVLANs from "../Pages/SwitchingVLANs";
import ACLs from "../Pages/ACLs";
import WirelessNetworking from "../Pages/WirelessNetworking";
import NetworkingProtocols from "../Pages/NetworkingProtocols";
import NetworkSecurity from "../Pages/NetworkSecurityBasics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(App),
    errorElement: createElement(ErrorPage),
    children: [
      {
        index: true,
        element: createElement(Home),
      },
      // Core Networking Topics
      {
        path: "core-networking/ip-networking-overview",
        element: createElement(IPNetworkingOverview),
      },
      {
        path: "core-networking/routing",
        element: createElement(RoutingProtocols),
      },
      {
        path: "core-networking/switching-vlans",
        element: createElement(SwitchingVLANs),
      },
      {
        path: "core-networking/acls",
        element: createElement(ACLs),
      },
      {
        path: "core-networking/wireless",
        element: createElement(WirelessNetworking),
      },
      {
        path: "core-networking/protocols",
        element: createElement(NetworkingProtocols),
      },
      {
        path: "core-networking/security",
        element: createElement(NetworkSecurity),
      },
    ],
  },
]);

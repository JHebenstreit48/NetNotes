import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Overview: Subpage = {
  name: "Overview",
  subpages: [
    {
      name: "Introduction",
      path: "/fundamentals/overview/introduction"
    },
    {
      name: "Internet/Networks",
      path: "/fundamentals/overview/internet"
    },
    {
      name: "Local Networks",
      path: "/fundamentals/overview/localnetworks"
    },
    {
      name: "Connected Devices",
      path: "/fundamentals/overview/connecteddevices"
    }
  ]
};

export default Overview;
import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "Introduction",
          path: "/fundamentals/basics/overview/introduction"
        },
        {
          name: "Internet/Networks",
          path: "/fundamentals/basics/overview/internet"
        },
        {
          name: "Local Networks",
          path: "/fundamentals/basics/overview/local-networks"
        },
        {
          name: "Connected Devices",
          path: "/fundamentals/basics/overview/connected-devices"
        }
      ]
    },
    {
      name: "Devices & Models",
      subpages: [
        {
          name: "Networking Devices",
          path: "/fundamentals/basics/devices-and-models/network-devices"
        },
        {
          name: "Networking Models",
          path: "/fundamentals/basics/devices-and-models/network-models"
        }
      ]
    }
  ]
};

export default Basics;
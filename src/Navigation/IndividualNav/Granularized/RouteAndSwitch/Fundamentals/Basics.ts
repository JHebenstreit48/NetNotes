import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
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
    },
    {
      name: "Devices & Models",
      subpages: [
        {
          name: "Networking Devices",
          path: "/fundamentals/devicesandmodels/networkdevices"
        },
        {
          name: "Networking Models",
          path: "/fundamentals/devicesandmodels/networkmodels"
        }
      ]
    }
  ]
};

export default Basics;
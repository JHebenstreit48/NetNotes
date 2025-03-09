import { Subpage } from "@/Navigation/NavigationTypes";

const NetworkingOverview: Subpage = {
  name: "Networking Basics",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "Introduction",
          path: "/corenetworking/ipnetworking/overview"
        },
        {
          name: "Internet & Networks",
          path: "/corenetworking/ipnetworking/internet"
        },
        {
          name: "Local Networks",
          path: "/corenetworking/ipnetworking/localnetworks"
        },
        {
          name: "Connected Devices",
          path: "/corenetworking/ipnetworking/connecteddevices"
        },
        {
          name: "Networking Devices",
          path: "/corenetworking/ipnetworking/networkdevices"
        },
        {
          name: "Networking Models",
          path: "/corenetworking/ipnetworking/models"
        },
      ],
    },
  ],
};

export default NetworkingOverview;

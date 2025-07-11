import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Transport: Subpage = {
  name: "Transport Layer",
  subpages: [
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "Introduction",
          path: "/corenetworking/tcpipmodel/transportlayer/coreconcepts/introduction"
        },
        {
          name: "TCP vs UDP",
          path: "/corenetworking/tcpipmodel/transportlayer/coreconcepts/tcpvsudp"
        }
      ]
    }
  ]
};

export default Transport;
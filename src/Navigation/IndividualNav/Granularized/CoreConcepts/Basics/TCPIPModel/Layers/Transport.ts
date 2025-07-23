import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Transport: Subpage = {
  name: "Transport Layer",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "Introduction",
          path: "/corenetworking/tcpipmodel/transportlayer/basics/introduction"
        },
        {
          name: "TCP vs UDP",
          path: "/corenetworking/tcpipmodel/transportlayer/basics/tcpvsudp"
        },
        {
          name: "Ports & Sockets",
          path: "/corenetworking/tcpipmodel/transportlayer/basics/portsockets"
        },
        {
          name: "Reliable Delivery & Flow Control",
          path: "/corenetworking/tcpipmodel/transportlayer/basics/reliabilityflow"
        }
      ]
    },
    {
      name: "TCP Mechanisms",
      subpages: [
        {
          name: "Three-Way Handshake",
          path: "/corenetworking/tcpipmodel/transportlayer/tcpmechanisms/threewayhandshake"
        },
        {
          name: "Acknowledgment & Sequencing",
          path: "/corenetworking/tcpipmodel/transportlayer/tcpmechanisms/ackandsequence"
        },
        {
          name: "Windowing & Congestion Control",
          path: "/corenetworking/tcpipmodel/transportlayer/tcpmechanisms/windowingcongestion"
        }
      ]
    }
  ]
};

export default Transport;
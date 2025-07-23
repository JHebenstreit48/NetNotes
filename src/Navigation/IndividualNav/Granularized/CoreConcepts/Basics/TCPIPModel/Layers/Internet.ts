import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Internet: Subpage = {
  name: "Internet Layer",
  subpages: [
    {
      name: "IP Addressing & Routing",
      subpages: [
        {
          name: "Introduction",
          path: "/corenetworking/tcpipmodel/internetlayer/iprouting/introduction"
        },
        {
          name: "IPv4 vs IPv6",
          path: "/corenetworking/tcpipmodel/internetlayer/iprouting/ipv4vsipv6"
        },
        {
          name: "Subnet Masking & Gateways",
          path: "/corenetworking/tcpipmodel/internetlayer/iprouting/subnetandgateway"
        },
        {
          name: "Default Gateway & Routing Tables",
          path: "/corenetworking/tcpipmodel/internetlayer/iprouting/routingtables"
        }
      ]
    },
    {
      name: "ICMP & Error Reporting",
      subpages: [
        {
          name: "ICMP Basics",
          path: "/corenetworking/tcpipmodel/internetlayer/icmp/icmpbasics"
        },
        {
          name: "Ping & Traceroute",
          path: "/corenetworking/tcpipmodel/internetlayer/icmp/pingtraceroute"
        }
      ]
    },
    {
      name: "Routing Protocol Concepts",
      subpages: [
        {
          name: "Routing Protocol Overview",
          path: "/corenetworking/tcpipmodel/internetlayer/routingconcepts/overview"
        },
        {
          name: "Static vs Dynamic (Conceptual)",
          path: "/corenetworking/tcpipmodel/internetlayer/routingconcepts/staticvsdynamic"
        },
        {
          name: "Common Protocol Families",
          path: "/corenetworking/tcpipmodel/internetlayer/routingconcepts/protocoloverview"
        },
        {
          name: "See Intermediate for Configs",
          path: "/corenetworking/intermediate/staticvsdynamic/staticrouting/static"
        }
      ]
    }
  ]
};

export default Internet;
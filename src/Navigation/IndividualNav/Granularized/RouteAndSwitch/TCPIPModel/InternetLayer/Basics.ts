import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "ICMP & Error Reporting",
      subpages: [
        {
          name: "Basics",
          path: "/tcpip-model/internet-layer/icmp-and-error/basics"
        },
        {
          name: "Ping & Traceroute",
          path: "/tcpip-model/internet-layer/icmp-and-error/ping-and-traceroute"
        }
      ]
    },
    {
      name: "IP Addressing & Routing",
      subpages: [
        {
          name: "Introduction",
          path: "/tcpip-model/internet-layer/ip-addressing-routing/introduction"
        },
        {
          name: "IPv4 vs IPv6",
          path: "/tcpip-model/internet-layer/ip-addressing-routing/ipv4-vs-ipv6"
        },
        {
          name: "Subnet Masking & Gateways",
          path: "/tcpip-model/internet-layer/ip-addressing-routing/subnet-masking-and-gateways"
        },
        {
          name: "Default Gateway & Routing Tables",
          path: "/tcpip-model/internet-layer/ip-addressing-routing/routing-tables"
        }
      ]
    }
  ]
};

export default Basics;
import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "IP Addressing",
      subpages: [
        {
          name: "Addressing Overview",
          path: "/tcpip-model/internet-layer/ip-addressing/overview"
        },
        {
          name: "IPv4",
          path: "/tcpip-model/internet-layer/ip-addressing/ipv4"
        },
        {
          name: "IPv6",
          subpages: [
            {
              name: "Fundamentals",
              path: "/tcpip-model/internet-layer/ip-addressing/ipv6/fundamentals"
            },
            {
              name: "Address Types & Scope",
              path: "/tcpip-model/internet-layer/ip-addressing/ipv6/address-types-and-scope"
            },
            {
              name: "ND/RA • SLAAC/DAD",
              path: "/tcpip-model/internet-layer/ip-addressing/ipv6/nd-ra-slaac-dad"
            }
          ]
        },
        {
          name: "IPv4 vs IPv6 Comparison",
          path: "/tcpip-model/internet-layer/ip-addressing/ipv4-vs-ipv6-comparison"
        }
      ]
    },
    {
      name: "Subnetting & Gateways",
      subpages: [
        {
          name: "Subnet Masks & CIDR",
          path: "/tcpip-model/internet-layer/subnetting-and-gateways/subnet-masks-and-cidr"
        },
        {
          name: "Default Gateway & Routing Tables",
          path: "/tcpip-model/internet-layer/subnetting-and-gateways/default-gateway-and-routing-tables"
        }
      ]
    },
    {
      name: "ICMP & Diagnostics",
      subpages: [
        {
          name: "ICMP Basics",
          path: "/tcpip-model/internet-layer/icmp-and-diagnostics/icmp-basics"
        },
        {
          name: "Ping & Traceroute",
          path: "/tcpip-model/internet-layer/icmp-and-diagnostics/ping-and-traceroute"
        }
      ]
    }
  ]
};

export default Basics;
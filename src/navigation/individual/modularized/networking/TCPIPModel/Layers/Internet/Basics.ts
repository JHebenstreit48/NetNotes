import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/networking/tcp-ip-model/layers/internet/basics/fundamentals/introduction',
        },
        {
          name: 'DHCP (Address Assignment)',
          path: '/networking/tcp-ip-model/layers/internet/basics/fundamentals/dhcp',
        },
      ],
    },
    {
      name: 'IP Addressing',
      subpages: [
        {
          name: 'IPv4',
          subpages: [
            {
              name: 'Address Structure',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/ipv4/address-structure',
            },
            {
              name: 'Transmission Types',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/ipv4/transmission-types',
            },
            {
              name: 'Types of Addresses',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/ipv4/types-of-addresses',
            },
            {
              name: 'IPv4 Exhaustion & Transition',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/ipv4/ipv4-exhaustion-and-transition',
            },
            {
              name: 'IPv4 vs IPv6 Comparison',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/ipv4/ipv4-vs-ipv6-comparison',
            },
          ],
        },
        {
          name: 'IPv6',
          subpages: [
            {
              name: 'Fundamentals',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/ipv6/fundamentals',
            },
            {
              name: 'Address Types & Scope',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/ipv6/address-types-and-scope',
            },
            {
              name: 'ND/RA & SLAAC/DAD',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/ipv6/nd-ra-slaac-dad',
            },
          ],
        },
        {
          name: 'Subnetting & Gateways',
          subpages: [
            {
              name: 'Subnet Masks & CIDR',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/subnet-masks-and-cidr',
            },
            {
              name: 'Broadcast Domains & Segmentation',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/broadcast-domains-and-segmentation',
            },
            {
              name: 'Default Gateway & Routing Tables',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/default-gateway-and-routing-tables',
            },
            {
              name: 'IPv4 Subnetting',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/ipv4-subnetting',
            },
            {
              name: 'IPv6 Subnetting',
              path: '/networking/tcp-ip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/ipv6-subnetting',
            },
          ],
        },
      ],
    },
    {
      name: 'ICMP & Commands',
      subpages: [
        {
          name: 'ICMP',
          path: '/networking/tcp-ip-model/layers/internet/basics/icmp-and-commands/icmp',
        },
        {
          name: 'ipconfig (Viewing & Renewing IP Configuration)',
          path: '/networking/tcp-ip-model/layers/internet/basics/icmp-and-commands/ipconfig',
        },
        {
          name: 'Ping & Traceroute',
          path: '/networking/tcp-ip-model/layers/internet/basics/icmp-and-commands/ping-and-traceroute',
        },
      ],
    },
  ],
};

export default Basics;
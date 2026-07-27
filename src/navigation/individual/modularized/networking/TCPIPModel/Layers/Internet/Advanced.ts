import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Fragmentation & MTU",
      subpages: [
        {
          name: "IPv4 DF/MF & Reassembly",
          path: "/networking/tcp-ip-model/layers/internet/advanced/fragmentation-and-mtu/ipv4-df-mf-and-reassembly"
        },
        {
          name: "Path MTU Discovery",
          path: "/networking/tcp-ip-model/layers/internet/advanced/fragmentation-and-mtu/path-mtu-discovery"
        }
      ]
    },
    {
      name: "NAT & PAT",
      subpages: [
        {
          name: "Concepts & Types",
          path: "/networking/tcp-ip-model/layers/internet/advanced/nat-and-pat/concepts-and-types"
        },
        {
          name: "Use Cases & Limits",
          path: "/networking/tcp-ip-model/layers/internet/advanced/nat-and-pat/use-cases-and-limits"
        }
      ]
    },
    {
      name: "Multicast Fundamentals",
      subpages: [
        {
          name: "IGMP & MLD",
          path: "/networking/tcp-ip-model/layers/internet/advanced/multicast-fundamentals/igmp-and-mld"
        },
        {
          name: "PIM SM/DM (Concepts)",
          path: "/networking/tcp-ip-model/layers/internet/advanced/multicast-fundamentals/pim-sm-dm-concepts"
        }
      ]
    }
  ]
};

export default Advanced;
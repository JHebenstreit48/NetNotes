import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "VLANs",
      subpages: [
        {
          name: "Concepts",
          subpages: [
            {
              name: "VLAN Concepts",
              path: "/networking/switching/advanced/vlans/concepts/vlan-concepts"
            },
            {
              name: "Voice & Native VLANs",
              path: "/networking/switching/advanced/vlans/concepts/voice-and-native-vlans"
            }
          ]
        },
        {
          name: "Operations",
          subpages: [
            {
              name: "Trunking (802.1Q)",
              path: "/networking/switching/advanced/vlans/operations/trunking-8021q"
            },
            {
              name: "VLAN Trunking Protocol (VTP)",
              path: "/networking/switching/advanced/vlans/operations/vtp"
            }
          ]
        },
        {
          name: "Routing",
          subpages: [
            {
              name: "Inter-VLAN Routing",
              path: "/networking/switching/advanced/vlans/routing/inter-vlan-routing"
            },
            {
              name: "Router-on-a-Stick (RoAS)",
              path: "/networking/switching/advanced/vlans/routing/router-on-a-stick"
            }
          ]
        },
        {
          name: "Security & Design",
          subpages: [
            {
              name: "VLAN Hopping Mitigation",
              path: "/networking/switching/advanced/vlans/security-and-design/vlan-hopping-mitigation"
            },
            {
              name: "DTP Best Practices",
              path: "/networking/switching/advanced/vlans/security-and-design/dtp-best-practices"
            }
          ]
        }
      ]
    },
    {
      name: "STP",
      subpages: [
        {
          name: "Roles & States",
          path: "/networking/switching/advanced/stp/roles-and-states"
        },
        {
          name: "Protections (BPDU/Root/Loop Guard)",
          path: "/networking/switching/advanced/stp/protections"
        }
      ]
    },
    {
      name: "EtherChannel",
      subpages: [
        {
          name: "LACP & PAgP",
          path: "/networking/switching/advanced/etherchannel/lacp-and-pagp"
        },
        {
          name: "Load Balancing & Design",
          path: "/networking/switching/advanced/etherchannel/load-balancing-and-design"
        }
      ]
    },
    {
      name: "Edge Services",
      subpages: [
        {
          name: "Port Security",
          path: "/networking/switching/advanced/edge-services/port-security"
        },
        {
          name: "Storm Control",
          path: "/networking/switching/advanced/edge-services/storm-control"
        }
      ]
    },
    {
      name: "QoS @ Edge",
      subpages: [
        {
          name: "Trust Boundaries",
          path: "/networking/switching/advanced/qos/trust-boundaries"
        },
        {
          name: "CoS/DSCP Mapping",
          path: "/networking/switching/advanced/qos/cos-dscp-mapping"
        }
      ]
    }
  ]
};

export default Advanced;
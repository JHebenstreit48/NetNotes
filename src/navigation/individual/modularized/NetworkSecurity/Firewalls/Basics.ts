import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/NetworkSecurity/Firewalls/Basics/Fundamentals'

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    {
      name: "Stateful & NAT",
      subpages: [
        {
          name: "NAT Fundamentals",
          path: "/network-security/firewalls/basics/nat-fundamentals"
        },
        {
          name: "Stateful Inspection",
          path: "/network-security/firewalls/basics/stateful-inspection"
        }
      ]
    },
    {
      name: "ZBFW Concepts",
      subpages: [
        {
          name: "Zones & Zone-Pairs",
          path: "/network-security/firewalls/basics/zbfw/zones-and-zone-pairs"
        },
        {
          name: "Class-Maps & Policy-Maps",
          path: "/network-security/firewalls/basics/zbfw/classmaps-policymaps"
        }
      ]
    },
    {
      name: "OPNsense",
      subpages: [
        {
          name: "Install & Setup",
          path: "/network-security/firewalls/basics/opnsense/install-setup"
        },
        {
          name: "Core Firewall Configuration",
          path: "/network-security/firewalls/basics/opnsense/core-configuration"
        }
      ]
    }
  ]
};

export default Basics;
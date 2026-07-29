import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "802.11 Fundamentals",
      subpages: [
        {
          name: "Wireless Standards",
          path: "/networking/wireless/basics/80211/wireless-standards"
        },
        {
          name: "Frequencies & Channels",
          path: "/networking/wireless/basics/80211/frequencies-and-channels"
        }
      ]
    },
    {
      name: "WLAN Architecture",
      subpages: [
        {
          name: "BSS/ESS/SSID",
          path: "/networking/wireless/basics/architecture/bss-ess-ssid"
        },
        {
          name: "AP Modes (Local/Flex)",
          path: "/networking/wireless/basics/architecture/ap-modes"
        }
      ]
    },
    {
      name: "Association",
      subpages: [
        {
          name: "Discovery & Join",
          path: "/networking/wireless/basics/association/discovery-and-join"
        },
        {
          name: "DHCP & DNS Workflow",
          path: "/networking/wireless/basics/association/dhcp-and-dns-workflow"
        }
      ]
    },
    {
      name: "Troubleshooting",
      subpages: [
        {
          name: "Wireless Troubleshooting",
          path: "/networking/wireless/basics/troubleshooting/wireless-troubleshooting"
        },
        {
          name: "Common Issues & Fixes",
          path: "/networking/wireless/basics/troubleshooting/common-issues-and-fixes"
        }
      ]
    }
  ]
};

export default Basics;
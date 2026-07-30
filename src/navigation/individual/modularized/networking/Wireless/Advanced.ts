import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "RF & Performance",
      subpages: [
        {
          name: "RSSI/SNR & MCS",
          path: "/networking/wireless/advanced/rf-performance/rssi-snr-and-mcs"
        },
        {
          name: "Band Steering & Load Balance",
          path: "/networking/wireless/advanced/rf-performance/band-steering-and-load-balance"
        }
      ]
    },
    {
      name: "Roaming",
      subpages: [
        {
          name: "802.11k/v/r",
          path: "/networking/wireless/advanced/roaming/80211kvr"
        },
        {
          name: "Fast Transition Notes",
          path: "/networking/wireless/advanced/roaming/fast-transition-notes"
        }
      ]
    },
    {
      name: "QoS & Services",
      subpages: [
        {
          name: "WMM & EDCA",
          path: "/networking/wireless/advanced/qos/wmm-and-edca"
        },
        {
          name: "Multicast over WLAN",
          path: "/networking/wireless/advanced/qos/multicast-over-wlan"
        }
      ]
    },
    {
      name: "Controller Ops (Non-Cloud)",
      subpages: [
        {
          name: "WLC Basics",
          path: "/networking/wireless/advanced/controller/wlc-basics"
        },
        {
          name: "CAPWAP Join & Tunnel",
          path: "/networking/wireless/advanced/controller/capwap-join-and-tunnel"
        }
      ]
    }
  ]
};

export default Advanced;
import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/mobile/basics/fundamentals/introduction",
        },
        {
          name: "Radios at a Glance",
          path: "/networking/mobile/basics/fundamentals/radios-at-a-glance",
        },
        {
          name: "Network Selection & Wi-Fi Behavior",
          path: "/networking/mobile/basics/fundamentals/network-selection",
        },
      ],
    },
    {
      name: "Cellular",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/mobile/basics/cellular/introduction",
        },
        {
          name: "Coverage & Data Plans",
          path: "/networking/mobile/basics/cellular/coverage-and-data-plans",
        },
      ],
    },
    {
      name: "Bluetooth",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/mobile/basics/bluetooth/introduction",
        },
        {
          name: "Pairing & Profiles",
          path: "/networking/mobile/basics/bluetooth/pairing-and-profiles",
        },
      ],
    },
    {
      name: "NFC",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/mobile/basics/nfc/introduction",
        },
        {
          name: "Common Uses",
          path: "/networking/mobile/basics/nfc/common-uses",
        },
      ],
    },
    {
      name: "Location",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/mobile/basics/location/introduction",
        },
        {
          name: "Accuracy & Limitations",
          path: "/networking/mobile/basics/location/accuracy-and-limitations",
        },
      ],
    },
    {
      name: "Tethering",
      subpages: [
        {
          name: "Introduction",
          path: "/networking/mobile/basics/tethering/introduction",
        },
        {
          name: "USB vs Wi-Fi vs Bluetooth",
          path: "/networking/mobile/basics/tethering/usb-wifi-bluetooth",
        },
      ],
    },
  ],
};

export default Basics;
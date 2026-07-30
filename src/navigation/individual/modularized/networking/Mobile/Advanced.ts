import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Cellular Performance",
      subpages: [
        {
          name: "Congestion & Throttling",
          path: "/networking/mobile/advanced/cellular-performance/congestion-and-throttling",
        },
        {
          name: "Handoffs (Concepts)",
          path: "/networking/mobile/advanced/cellular-performance/handoffs-concepts",
        },
      ],
    },
    {
      name: "Bluetooth Troubleshooting",
      subpages: [
        {
          name: "Common Pairing Issues",
          path: "/networking/mobile/advanced/bluetooth/common-pairing-issues",
        },
        {
          name: "Interference & Dropouts",
          path: "/networking/mobile/advanced/bluetooth/interference-and-dropouts",
        },
      ],
    },
    {
      name: "NFC Security",
      subpages: [
        {
          name: "Risks & Best Practices",
          path: "/networking/mobile/advanced/nfc-security/risks-and-best-practices",
        },
        {
          name: "Payments & Secure Element",
          path: "/networking/mobile/advanced/nfc-security/payments-and-secure-element",
        },
      ],
    },
    {
      name: "Radio Coexistence",
      subpages: [
        {
          name: "Wi-Fi + Bluetooth Interaction",
          path: "/networking/mobile/advanced/coexistence/wifi-and-bluetooth",
        },
        {
          name: "Cellular + Wi-Fi Switching",
          path: "/networking/mobile/advanced/coexistence/cellular-and-wifi-switching",
        },
      ],
    },
  ],
};

export default Advanced;
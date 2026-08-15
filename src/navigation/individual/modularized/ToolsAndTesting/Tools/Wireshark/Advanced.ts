import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Analysis",
      subpages: [
        {
          name: "Follow Streams & RTT",
          path: "/tools-and-testing/tools/wireshark/advanced/analysis/follow-streams-and-rtt"
        },
        {
          name: "TLS Keys & Decryption",
          path: "/tools-and-testing/tools/wireshark/advanced/analysis/tls-keys-and-decryption"
        }
      ]
    },
    {
      name: "Customization",
      subpages: [
        {
          name: "Columns & Coloring",
          path: "/tools-and-testing/tools/wireshark/advanced/customization/columns-and-coloring"
        },
        {
          name: "Extcap & TShark",
          path: "/tools-and-testing/tools/wireshark/advanced/customization/extcap-and-tshark"
        }
      ]
    },
    {
      name: "Remote Capture",
      subpages: [
        {
          name: "rpcap/sshdump",
          path: "/tools-and-testing/tools/wireshark/advanced/remote-capture/rpcap-and-sshdump"
        },
        {
          name: "Ring Buffers & Performance",
          path: "/tools-and-testing/tools/wireshark/advanced/remote-capture/ring-buffers-and-performance"
        }
      ]
    }
  ]
};

export default Advanced;
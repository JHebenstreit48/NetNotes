import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "TCP Mechanisms",
      subpages: [
        {
          name: "Three-Way Handshake",
          path: "/tcpip-model/transport-layer/advanced/tcp/mechanisms/three-way-handshake"
        },
        {
          name: "Acknowledgment/Sequencing",
          path: "/tcpip-model/transport-layer/advanced/tcp/mechanisms/acknowledgment-sequencing"
        },
        {
          name: "Windowing/Congestion Control",
          path: "/tcpip-model/transport-layer/advanced/tcp/mechanisms/windowing-congestion-control"
        }
      ]
    },
    {
      name: "UDP Details",
      subpages: [
        {
          name: "Datagrams & Checksum",
          path: "/tcpip-model/transport-layer/advanced/udp/datagrams-and-checksum"
        },
        {
          name: "Multiplexing/Demux & Use Cases",
          path: "/tcpip-model/transport-layer/advanced/udp/multiplexing-demux-use-cases"
        }
      ]
    },
    {
      name: "Multiplexing",
      subpages: [
        {
          name: "Process Demultiplexing",
          path: "/tcpip-model/transport-layer/advanced/multiplexing/process-demultiplexing"
        },
        {
          name: "Ephemeral & Well-Known Ports",
          path: "/tcpip-model/transport-layer/advanced/multiplexing/ephemeral-and-well-known-ports"
        }
      ]
    }
  ]
};

export default Advanced;
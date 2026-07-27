import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "TCP Mechanisms",
      subpages: [
        {
          name: "Three-Way Handshake",
          path: "/networking/tcp-ip-model/layers/transport/advanced/tcp-mechanisms/three-way-handshake"
        },
        {
          name: "Acknowledgment/Sequencing",
          path: "/networking/tcp-ip-model/layers/transport/advanced/tcp-mechanisms/acknowledgment-sequencing"
        },
        {
          name: "Windowing/Congestion Control",
          path: "/networking/tcp-ip-model/layers/transport/advanced/tcp-mechanisms/windowing-congestion-control"
        }
      ]
    },
    {
      name: "UDP Details",
      subpages: [
        {
          name: "Datagrams & Checksum",
          path: "/networking/tcp-ip-model/layers/transport/advanced/udp/datagrams-and-checksum"
        },
        {
          name: "Multiplexing/Demux & Use Cases",
          path: "/networking/tcp-ip-model/layers/transport/advanced/udp/multiplexing-demux-use-cases"
        }
      ]
    },
    {
      name: "Multiplexing",
      subpages: [
        {
          name: "Process Demultiplexing",
          path: "/networking/tcp-ip-model/layers/transport/advanced/multiplexing/process-demultiplexing"
        },
        {
          name: "Ephemeral & Well-Known Ports",
          path: "/networking/tcp-ip-model/layers/transport/advanced/multiplexing/ephemeral-and-well-known-ports"
        }
      ]
    }
  ]
};

export default Advanced;
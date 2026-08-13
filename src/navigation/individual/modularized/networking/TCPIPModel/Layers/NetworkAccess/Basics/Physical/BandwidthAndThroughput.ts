import type { Subpage } from '@/types/navigation';

const BandwidthAndThroughput: Subpage = {
  name: 'Bandwidth & Throughput',
  subpages: [
    {
      name: 'Bandwidth',
      path: '/networking/tcp-ip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth',
    },
    {
      name: 'Throughput',
      path: '/networking/tcp-ip-model/layers/network-access/basics/physical/bandwidth-and-throughput/throughput',
    }
  ]
};

export default BandwidthAndThroughput;
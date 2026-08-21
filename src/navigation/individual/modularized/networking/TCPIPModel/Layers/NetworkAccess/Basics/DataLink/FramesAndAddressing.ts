import type { Subpage } from '@/types/navigation';

const FramesAndAddressing: Subpage = {
  name: 'Frames & Addressing',
  subpages: [
    {
      name: 'MAC Addressing',
      path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing',
    },
    {
      name: 'Ethernet Frame Fields',
      path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/ethernet-frame-fields',
    },
    {
      name: 'Burned-In Address (BIA)',
      path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/burned-in-address-bia',
    }
  ]
};

export default FramesAndAddressing;
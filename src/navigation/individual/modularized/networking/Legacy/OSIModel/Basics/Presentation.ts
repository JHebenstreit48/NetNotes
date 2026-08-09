import type { Subpage } from '@/types/navigation';

const Presentation: Subpage = {
  name: 'Presentation',
  subpages: [
    {
      name: 'ASN.1 & BER/DER',
      path: '/networking/legacy/osi-model/basics/presentation/asn1-and-ber-der',
    },
    {
      name: 'Transfer Syntax',
      path: '/networking/legacy/osi-model/basics/presentation/transfer-syntax',
    }
  ]
};

export default Presentation;
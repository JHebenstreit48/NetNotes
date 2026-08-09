import type { Subpage } from '@/types/navigation';

const PDUsAndSAP: Subpage = {
  name: 'PDUs & SAP',
  subpages: [
    {
      name: 'PDU Names by Layer',
      path: '/networking/legacy/osi-model/basics/pdus-and-sap/pdu-names-by-layer',
    },
    {
      name: 'SAP/SDU/PCI',
      path: '/networking/legacy/osi-model/basics/pdus-and-sap/sap-sdu-pci',
    }
  ]
};

export default PDUsAndSAP;
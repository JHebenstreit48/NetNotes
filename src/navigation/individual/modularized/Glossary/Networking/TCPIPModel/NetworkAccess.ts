import type { Subpage } from '@/types/navigation';

import DataLink from '@/navigation/individual/modularized/Glossary/Networking/TCPIPModel/NetworkAccess/DataLink';
import Physical from '@/navigation/individual/modularized/Glossary/Networking/TCPIPModel/NetworkAccess/Physical';

const NetworkAccess: Subpage = {
  name: 'Network Access',
  subpages: [
    DataLink,
    Physical,
  ],
};

export default NetworkAccess;
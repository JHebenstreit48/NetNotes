import type { Subpage } from '@/types/navigation';

import Application from '@/navigation/individual/modularized/Glossary/Networking/TCPIPModel/Application';
import Transport from '@/navigation/individual/modularized/Glossary/Networking/TCPIPModel/Transport';
import Internet from '@/navigation/individual/modularized/Glossary/Networking/TCPIPModel/Internet';
import NetworkAccess from '@/navigation/individual/modularized/Glossary/Networking/TCPIPModel/NetworkAccess';

const TCPIPModel: Subpage = {
  name: 'TCP/IP Model',
  subpages: [
    Application,
    Transport,
    Internet,
    NetworkAccess
  ],
};

export default TCPIPModel;
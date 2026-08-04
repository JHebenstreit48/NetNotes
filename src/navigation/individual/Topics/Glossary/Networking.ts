import type { Subpage } from '@/types/navigation';

import Foundations from '@/navigation/individual/modularized/Glossary/Networking/Foundations';
import TCPIPModel from '@/navigation/individual/modularized/Glossary/Networking/TCPIPModel';
import Switching from '@/navigation/individual/modularized/Glossary/Networking/Switching';

const Networking: Subpage = {
  name: 'Networking',
  subpages: [
    Foundations,
    TCPIPModel,
    Switching,
  ],
};

export default Networking;
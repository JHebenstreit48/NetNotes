import type { Subpage } from '@/types/navigation/dropdownState';

import TCPIPModel from '@/navigation/individual/modularized/Glossary/Networking/TCPIPModel';
import Switching from '@/navigation/individual/modularized/Glossary/Networking/Switching';

const Networking: Subpage = {
  name: 'Networking',
  subpages: [
    TCPIPModel,
    Switching,
  ],
};

export default Networking;
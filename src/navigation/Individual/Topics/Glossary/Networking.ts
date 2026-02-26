import type { Subpage } from '@/types/navigation';

import Switching from '@/navigation/Individual/Granularized/Glossary/Networking/Switching';

const Networking: Subpage = {
  name: 'Networking',
  subpages: [
    Switching,
  ],
};

export default Networking;
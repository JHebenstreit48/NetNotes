import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/NetworkSecurity/IDSIPS/Basics';
import Advanced from '@/Navigation/Individual/Granularized/NetworkSecurity/IDSIPS/Advanced';

const IDSIPS: Subpage = {
  name: 'IDS & IPS',
  subpages: [
    Basics,
    Advanced
  ],
};

export default IDSIPS;
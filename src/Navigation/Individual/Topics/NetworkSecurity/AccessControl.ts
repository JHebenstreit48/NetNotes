import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/NetworkSecurity/AccessControl/Basics';
import Advanced from '@/Navigation/Individual/Granularized/NetworkSecurity/AccessControl/Advanced';

const AccessControl: Subpage = {
  name: 'Access Control',
  subpages: [
    Basics,
    Advanced
  ],
};

export default AccessControl;
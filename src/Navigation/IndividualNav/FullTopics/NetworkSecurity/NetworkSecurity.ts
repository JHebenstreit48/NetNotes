import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import CoreConcepts from '@/Navigation/IndividualNav/Granularized/NetworkSecurity/NetworkSecurity/CoreConcepts';
import PerimeterProtection from '@/Navigation/IndividualNav/Granularized/NetworkSecurity/NetworkSecurity/PerimeterProtection';

const NetworkSecurity: Subpage = {
  name: 'Network Security',
  subpages: [
    CoreConcepts,
    PerimeterProtection
  ]
};

export default NetworkSecurity;
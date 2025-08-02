import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import CoreConcepts from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Advanced/NetworkSecurity/CoreConcepts';
import PerimeterProtection from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Advanced/NetworkSecurity/PerimeterProtection';

const NetworkSecurity: Subpage = {
  name: 'Network Security',
  subpages: [
    CoreConcepts,
    PerimeterProtection
  ]
};

export default NetworkSecurity;
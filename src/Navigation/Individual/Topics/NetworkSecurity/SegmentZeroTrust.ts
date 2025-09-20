import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/NetworkSecurity/SegmentZeroTrust/Basics';
import Advanced from '@/Navigation/Individual/Granularized/NetworkSecurity/SegmentZeroTrust/Advanced';

const SegmentZeroTrust: Subpage = {
  name: 'Segment Zero Trust',
  subpages: [
    Basics,
    Advanced
  ],
};

export default SegmentZeroTrust;
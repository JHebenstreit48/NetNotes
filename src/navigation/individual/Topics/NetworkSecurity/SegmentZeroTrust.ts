import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/NetworkSecurity/SegmentZeroTrust/Basics';
import Advanced from '@/navigation/individual/modularized/NetworkSecurity/SegmentZeroTrust/Advanced';

const SegmentZeroTrust: Subpage = {
  name: 'Segment Zero Trust',
  subpages: [
    Basics,
    Advanced
  ],
};

export default SegmentZeroTrust;
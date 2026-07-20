import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/Wireshark/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/Wireshark/Advanced';

const Wireshark: Subpage = {
  name: 'Wireshark',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Wireshark;
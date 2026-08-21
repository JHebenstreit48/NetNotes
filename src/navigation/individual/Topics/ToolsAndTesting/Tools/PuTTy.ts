import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/ToolsAndTesting/Tools/PuTTy/Basics';
import Advanced from '@/navigation/individual/modularized/ToolsAndTesting/Tools/PuTTy/Advanced';

const PuTTy: Subpage = {
  name: 'PuTTY',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default PuTTy;
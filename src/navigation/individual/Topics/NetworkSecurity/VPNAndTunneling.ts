import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/NetworkSecurity/VPNAndTunneling/Basics';
import Advanced from '@/navigation/individual/modularized/NetworkSecurity/VPNAndTunneling/Advanced';

const VPNAndTunneling: Subpage = {
  name: 'VPN & Tunneling',
  subpages: [
    Basics,
    Advanced
  ],
};

export default VPNAndTunneling;
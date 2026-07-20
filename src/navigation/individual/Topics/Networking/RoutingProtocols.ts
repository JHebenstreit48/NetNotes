import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Networking/RoutingProtocols/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/RoutingProtocols/Advanced';

const Routing: Subpage = {
  name: 'Routing',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Routing;
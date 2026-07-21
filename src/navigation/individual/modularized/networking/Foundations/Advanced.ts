import type { Subpage } from '@/types/navigation';

import ArchitectureAndDesign from '@/navigation/individual/modularized/networking/Foundations/Advanced/ArchitectureAndDesign';
import PlanesAndTraffice from '@/navigation/individual/modularized/networking/Foundations/Advanced/PlanesAndTraffic';
import DiagramAndDocs from '@/navigation/individual/modularized/networking/Foundations/Advanced/DiagramAndDocs';
import RoutingProtocols from '@/navigation/individual/modularized/networking/Foundations/Advanced/RoutingProtocols';
import Troubleshooting from '@/navigation/individual/modularized/networking/Foundations/Advanced/Troubleshooting';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    ArchitectureAndDesign,
    PlanesAndTraffice,
    DiagramAndDocs,
    RoutingProtocols,
    Troubleshooting
  ],
};

export default Advanced;
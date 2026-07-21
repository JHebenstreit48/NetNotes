import type { Subpage } from '@/types/navigation';

import StaticAndDynamicRouting from '@/navigation/individual/modularized/networking/Foundations/Advanced/RoutingProtocols/StaticAndDynamic';
import IGPsAndEGPs from '@/navigation/individual/modularized/networking/Foundations/Advanced/RoutingProtocols/IGPsAndEGPs';

const RoutingProtocols: Subpage = {
  name: 'Routing Protocols',
  subpages: [
    StaticAndDynamicRouting,
    IGPsAndEGPs
  ],
};

export default RoutingProtocols;
import type { Subpage } from '@/types/navigation';

import StaticRouting from '@/navigation/individual/modularized/Networking/Foundations/Advanced/RoutingProtocols/StaticAndDynamic/StaticRouting';
import DynamicRouting from '@/navigation/individual/modularized/Networking/Foundations/Advanced/RoutingProtocols/StaticAndDynamic/DynamicRouting';

const StaticAndDynamicRouting: Subpage = {
  name: 'Static & Dynamic Routing',
  subpages: [
    StaticRouting,
    DynamicRouting
  ],
};

export default StaticAndDynamicRouting;
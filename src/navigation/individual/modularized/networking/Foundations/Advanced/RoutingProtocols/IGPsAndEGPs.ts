import type { Subpage } from '@/types/navigation';

import IGPs from '@/navigation/individual/modularized/Networking/Foundations/Advanced/RoutingProtocols/IGPsAndEGPs/IGPs';
import EGPs from '@/navigation/individual/modularized/Networking/Foundations/Advanced/RoutingProtocols/IGPsAndEGPs/EGPs';

const IGPsAndEGPs: Subpage = {
  name: 'IGPs & EGPs',
  subpages: [
    IGPs,
    EGPs
  ],
};

export default IGPsAndEGPs;
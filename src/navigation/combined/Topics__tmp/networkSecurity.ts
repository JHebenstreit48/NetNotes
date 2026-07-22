import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/Topics/NetworkSecurity/Fundamentals'
import ACLs from '@/navigation/individual/Topics/NetworkSecurity/ACLs';
import AccessControl from '@/navigation/individual/Topics/NetworkSecurity/AccessControl';
import Firewalls from '@/navigation/individual/Topics/NetworkSecurity/Firewalls';
import VPNAndTunneling from '@/navigation/individual/Topics/NetworkSecurity/VPNAndTunneling';
import IDSIPS from '@/navigation/individual/Topics/NetworkSecurity/IDSIPS';
import NetworkControls from '@/navigation/individual/Topics/NetworkSecurity/NetworkControls';
import SegmentZeroTrust from '@/navigation/individual/Topics/NetworkSecurity/SegmentZeroTrust';

const networkSecurity: Subpage = {
  name: 'Network Security',
  subpages: [
    Fundamentals,
    ACLs,
    AccessControl,
    Firewalls,
    VPNAndTunneling,
    IDSIPS,
    NetworkControls,
    SegmentZeroTrust,
  ],
};

export default networkSecurity;
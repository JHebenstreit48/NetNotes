import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ConfigurationExamples from '@/Navigation/IndividualNav/Granularized/NetworkSecurity/ACLs/ACLConfigExamples';
import StandardACLs from '@/Navigation/IndividualNav/Granularized/NetworkSecurity/ACLs/StandardACLs';
import ExtendedACLs from '@/Navigation/IndividualNav/Granularized/NetworkSecurity/ACLs/ExtendedACLs';
import Overview from '@/Navigation/IndividualNav/Granularized/NetworkSecurity/ACLs/Overview';

import TroubleshootingACLs from '@/Navigation/IndividualNav/Granularized/NetworkSecurity/ACLs/VerifyingTroubleshoot';
import WildcardMasks from '@/Navigation/IndividualNav/Granularized/NetworkSecurity/ACLs/WildcardMasks';

const ACLs: Subpage = {
  name: 'ACLs',
  subpages: [
    Overview,
    ConfigurationExamples,
    StandardACLs,
    ExtendedACLs,
    TroubleshootingACLs,
    WildcardMasks,
  ],
};

export default ACLs;

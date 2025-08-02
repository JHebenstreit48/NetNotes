import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ConfigurationExamples from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Advanced/ACLs/ACLConfigExamples';
import StandardACLs from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Advanced/ACLs/StandardACLs';
import ExtendedACLs from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Advanced/ACLs/ExtendedACLs';
import Overview from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Advanced/ACLs/Overview';

import TroubleshootingACLs from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Advanced/ACLs/VerifyingTroubleshoot';
import WildcardMasks from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Advanced/ACLs/WildcardMasks';

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

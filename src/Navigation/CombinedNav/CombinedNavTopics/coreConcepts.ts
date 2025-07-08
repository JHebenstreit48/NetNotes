import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ------------------------- Overview Start -------------------------
import OverviewCoreConcepts from '@/Navigation/IndividualNav/CoreConcepts/Basics/Fundamentals/Core';
import OverviewDevicesAndModels from '@/Navigation/IndividualNav/CoreConcepts/Basics/Fundamentals/DeviceAndModels';
// -------------------------- Overview End --------------------------

// ---------------------------- ACLs Start -------------------------
import ACLsOverview from '@/Navigation/IndividualNav/CoreConcepts/Advanced/ACLsNavigation/Overview';
import ConfigurationExamples from '@/Navigation/IndividualNav/CoreConcepts/Advanced/ACLsNavigation/ACLConfigExamples';
import StandardACLs from '@/Navigation/IndividualNav/CoreConcepts/Advanced/ACLsNavigation/StandardACLs';
import ExtendedACLs from '@/Navigation/IndividualNav/CoreConcepts/Advanced/ACLsNavigation/ExtendedACLs';
import WildcardMasks from '@/Navigation/IndividualNav/CoreConcepts/Advanced/ACLsNavigation/WildcardMasks';
import TroubleshootingACLs from '@/Navigation/IndividualNav/CoreConcepts/Advanced/ACLsNavigation/VerifyingTroubleshooting';
// ---------------------------- ACLs End ------------------------------



const CoreConcepts: Page = {
  name: 'Core Networking',
  subpages: [
    {
      name: 'Overview',
      subpages: [
        OverviewCoreConcepts,
        OverviewDevicesAndModels
    ],
    },
    {
      name: 'ACLs',
      subpages: [
        ACLsOverview,
        ConfigurationExamples,
        StandardACLs,
        ExtendedACLs,
        WildcardMasks,
        TroubleshootingACLs
      ],
    },
  ],
};

export default CoreConcepts;

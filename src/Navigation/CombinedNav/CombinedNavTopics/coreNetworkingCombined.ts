import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ------------------------- Overview Start -------------------------
import OverviewCoreConcepts from '@/Navigation/IndividualNav/CoreNetworking/Basics/Overview/OverviewCore';
import OverviewDevicesAndModels from '@/Navigation/IndividualNav/CoreNetworking/Basics/Overview/OverviewDeviceAndModels';
// -------------------------- Overview End --------------------------

// ---------------------------- ACLs Start -------------------------
import ACLsOverview from '@/Navigation/IndividualNav/CoreNetworking/Advanced/ACLsNavigation/Overview';
import ConfigurationExamples from '@/Navigation/IndividualNav/CoreNetworking/Advanced/ACLsNavigation/ACLConfigExamples';
import StandardACLs from '@/Navigation/IndividualNav/CoreNetworking/Advanced/ACLsNavigation/StandardACLs';
import ExtendedACLs from '@/Navigation/IndividualNav/CoreNetworking/Advanced/ACLsNavigation/ExtendedACLs';
import WildcardMasks from '@/Navigation/IndividualNav/CoreNetworking/Advanced/ACLsNavigation/WildcardMasks';
import TroubleshootingACLs from '@/Navigation/IndividualNav/CoreNetworking/Advanced/ACLsNavigation/VerifyingTroubleshooting';
// ---------------------------- ACLs End ------------------------------



const coreNetworkingNav: Page = {
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

export default coreNetworkingNav;

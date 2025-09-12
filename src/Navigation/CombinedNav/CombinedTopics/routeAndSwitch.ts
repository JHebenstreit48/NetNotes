import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Basics/Fundamentals';
import OSIModel from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Basics/OSIModel';
import TCPIPModel from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Basics/TCPIPModel';
import Switching from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Basics/Switching';

import Routing from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Intermediate/Routing';
import Wireless from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Intermediate/Wireless';

import ACLs from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Advanced/ACLs';
import NetworkSecurity from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Advanced/NetworkSecurity';

const routeSwitch: Subpage = {
  name: 'Routing & Switching',
  subpages: [
    {
      name: 'Basics',
      subpages: [
        Fundamentals,
        OSIModel,
        TCPIPModel,
        Switching,
      ],
    },
    {
      name: 'Intermediate',
      subpages: [
        Routing,
        Wireless,
      ],
    },
    {
      name: 'Advanced',
      subpages: [
        ACLs,
        NetworkSecurity,
      ],
    },
  ],
};

export default routeSwitch;
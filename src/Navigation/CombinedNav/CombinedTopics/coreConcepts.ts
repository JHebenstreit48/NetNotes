import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Basics/Fundamentals';
import TCPIPModel from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Basics/TCPIPModel';
import ACLs from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Advanced/ACLs';
import NetworkSecurity from '@/Navigation/IndividualNav/FullTopics/CoreConcepts/Advanced/NetworkSecurity';

const CoreConcepts: Subpage = {
  name: 'Core Concepts',
  subpages: [
    {
      name: 'Basics',
      subpages: [Fundamentals, TCPIPModel],
    },
    {
      name: 'Advanced',
      subpages: [ACLs, NetworkSecurity],
    },
  ],
};

export default CoreConcepts;
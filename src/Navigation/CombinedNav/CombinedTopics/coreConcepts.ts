import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics";
import Intermediate from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Intermediate";
import Advanced from "@/Navigation/IndividualNav/Granularized/CoreConcepts/Advanced";

const CoreConcepts: Subpage = {
  name: 'Core Concepts',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
  ],
};

export default CoreConcepts;

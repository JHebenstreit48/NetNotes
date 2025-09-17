import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Overview from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Overview';

import GlossaryAndResources from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/GlossaryAndResources';

const OSIModel: Subpage = {
  name: 'OSI Model',
  subpages: [
  Overview,
  GlossaryAndResources
  ]
};

export default OSIModel;

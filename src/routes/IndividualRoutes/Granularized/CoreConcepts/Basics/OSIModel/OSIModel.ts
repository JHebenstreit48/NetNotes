import { RouteObject } from 'react-router-dom';

import Overview from '@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/OSIModel/ModelOverview/Overview';
import GlossaryAndResources from '@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/OSIModel/ModelOverview/GlossaryAndResources';

const OSIModel: RouteObject[] = [
    ...Overview,
    ...GlossaryAndResources
];

export default OSIModel;
import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/OSIModel/NonLayersRoutes/Fundamentals';
import Network from '@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/OSIModel/Layers/Network';
import OSIvsTCPIP from '@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/OSIModel/NonLayersRoutes/OSIvsTCPIP';

const OSIModel: RouteObject[] = [
    ...Fundamentals,
    ...Network,
    ...OSIvsTCPIP,
];

export default OSIModel;
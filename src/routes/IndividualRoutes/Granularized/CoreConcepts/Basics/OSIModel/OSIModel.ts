import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/OSIModel/NonLayersRoutes/Fundamentals';

import OSIvsTCPIP from '@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/OSIModel/NonLayersRoutes/OSIvsTCPIP';

const OSIModel: RouteObject[] = [
    ...Fundamentals,

    ...OSIvsTCPIP,
];

export default OSIModel;
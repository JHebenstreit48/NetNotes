import { RouteObject } from 'react-router-dom';

import Overview from '@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/Fundamentals/RoutesTrees/Overview';
import DevicesAndModels from '@/routes/IndividualRoutes/Granularized/CoreConcepts/Basics/Fundamentals/RoutesTrees/DevicesAndModels';

const Fundamentals: RouteObject[] = [
    ...Overview,
    ...DevicesAndModels
];

export default Fundamentals;

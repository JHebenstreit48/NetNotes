import { RouteObject } from 'react-router-dom';

import Overview from '@/routes/IndividualRoutes/Granularized/RouteAndSwitch/Fundamentals/Basics/Overview';
import DevicesAndModels from '@/routes/IndividualRoutes/Granularized/RouteAndSwitch/Fundamentals/Basics/DevicesAndModels';

const Fundamentals: RouteObject[] = [
    ...Overview,
    ...DevicesAndModels
];

export default Fundamentals;
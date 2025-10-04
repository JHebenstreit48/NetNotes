import { RouteObject } from 'react-router-dom';

import Overview from '@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics/LazyLoaded/Overview';
import GlossaryAndResources from '@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics/LazyLoaded/GlossaryAndResources';

const Basics: RouteObject[] = [
    ...Overview,
    ...GlossaryAndResources
];

export default Basics;
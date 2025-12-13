import { RouteObject } from 'react-router-dom';

import Basics from '@/routes/Individual/Granularized/RouteAndSwitch/Fundamentals/Basics';
import Advanced from '@/routes/Individual/Granularized/RouteAndSwitch/Fundamentals/Advanced';

const Fundamentals: RouteObject[] = [
    ...Basics,
    ...Advanced
];

export default Fundamentals;
import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/Individual/Granularized/Tools/Wireshark/Basics/Fundamentals';
import Filters from '@/routes/Individual/Granularized/Tools/Wireshark/Basics/Filters';
import ViewsAndTools from '@/routes/Individual/Granularized/Tools/Wireshark/Basics/ViewsAndTools';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Filters,
    ...ViewsAndTools
  ];

export default Basics;
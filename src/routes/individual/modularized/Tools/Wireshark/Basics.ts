import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/individual/modularized/Tools/Wireshark/Basics/Fundamentals';
import Filters from '@/routes/individual/modularized/Tools/Wireshark/Basics/Filters';
import ViewsAndTools from '@/routes/individual/modularized/Tools/Wireshark/Basics/ViewsAndTools';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Filters,
    ...ViewsAndTools
  ];

export default Basics;
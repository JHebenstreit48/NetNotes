import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/Individual/Granularized/Networking/Foundations/Basics/DevicesAndModels/Fundamentals';
import Routers from '@/routes/Individual/Granularized/Networking/Foundations/Basics/DevicesAndModels/Routers';

const DevicesAndModels: RouteObject[] = [
    ...Fundamentals,
    ...Routers
  ];

export default DevicesAndModels;
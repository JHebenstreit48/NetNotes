import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/individual/modularized/Networking/Foundations/Basics/DevicesAndModels/Fundamentals';
import Routers from '@/routes/individual/modularized/Networking/Foundations/Basics/DevicesAndModels/Routers';
import EndDevices from '@/routes/individual/modularized/Networking/Foundations/Basics/DevicesAndModels/EndDevices';

const DevicesAndModels: RouteObject[] = [
    ...Fundamentals,
    ...Routers,
    ...EndDevices
  ];

export default DevicesAndModels;
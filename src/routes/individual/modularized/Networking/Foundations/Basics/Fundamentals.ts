import { RouteObject } from 'react-router-dom';

import NetworkScopeAndDevices from '@/routes/individual/modularized/Networking/Foundations/Basics/Fundamentals/NetworkScope';
import ProtocolsAndStandards from '@/routes/individual/modularized/Networking/Foundations/Basics/Fundamentals/DevicesAndCommunications';

const DevicesAndModels: RouteObject[] = [
    ...NetworkScopeAndDevices,
    ...ProtocolsAndStandards
  ];

export default DevicesAndModels;
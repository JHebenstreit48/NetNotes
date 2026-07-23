import { RouteObject } from 'react-router-dom';

import NetworkScopeAndDevices from '@/routes/individual/modularized/Networking/Foundations/Basics/Fundamentals/NetworkScopeAndDevices';
import ProtocolsAndStandards from '@/routes/individual/modularized/Networking/Foundations/Basics/Fundamentals/ProtocolsAndStandards';

const DevicesAndModels: RouteObject[] = [
    ...NetworkScopeAndDevices,
    ...ProtocolsAndStandards
  ];

export default DevicesAndModels;
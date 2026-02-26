import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/Fundamentals';
import IPv6 from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv6';

const IPAddressing: RouteObject[] = [
    ...Fundamentals,
    ...IPv6
  ];

export default IPAddressing;
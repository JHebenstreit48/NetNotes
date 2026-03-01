import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/Fundamentals';
import IPv4 from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4';
import IPv6 from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv6';
import SubnettingAndGateways from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways';

const IPAddressing: RouteObject[] = [
    ...Fundamentals,
    ...IPv4,
    ...IPv6,
    ...SubnettingAndGateways
  ];

export default IPAddressing;
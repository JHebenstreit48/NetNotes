import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SngrepCallFlows = lazy(() => import('@/Pages/MainTabs/VoIP/Diagnostics/Advanced/Signaling/SngrepCallFlows'));
const WiresharkSIPSDPFilters = lazy(() => import('@/Pages/MainTabs/VoIP/Diagnostics/Advanced/Signaling/WiresharkSIPSDPFilters'));

const Signaling: RouteObject[] = [
  {
    path: '/voip/diagnostics/advanced/signaling/sngrep-callflows',
    element: <SngrepCallFlows />,
  },
  {
    path: '/voip/diagnostics/advanced/signaling/wireshark-sip-sdp',
    element: <WiresharkSIPSDPFilters />,
  },
];

export default Signaling;

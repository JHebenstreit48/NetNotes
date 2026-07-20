import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DHCPOptionsAndVoiceVLANs = lazy(() => import('@/Pages/MainTabs/VoIP/Diagnostics/Advanced/Provisioning/DHCPOptionsAndVoiceVLANs'));
const TFTPHTTPServersAndFileLayouts = lazy(() => import('@/Pages/MainTabs/VoIP/Diagnostics/Advanced/Provisioning/TFTPHTTPServersAndFileLayouts'));

const Provisioning: RouteObject[] = [
  {
    path: '/voip/diagnostics/advanced/provisioning/dhcp-voice-vlans',
    element: <DHCPOptionsAndVoiceVLANs />,
  },
  {
    path: '/voip/diagnostics/advanced/provisioning/servers-file-layouts',
    element: <TFTPHTTPServersAndFileLayouts />,
  },
];

export default Provisioning;

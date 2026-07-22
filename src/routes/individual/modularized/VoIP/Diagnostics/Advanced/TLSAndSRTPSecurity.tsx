import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TLSHandshakeAndCertificates = lazy(() => import('@/pages/mainTabs/VoIP/Diagnostics/Advanced/TLSAndSRTPSecurity/TLSHandshakeAndCertificates'));
const SRTPTroubleshooting = lazy(() => import('@/pages/mainTabs/VoIP/Diagnostics/Advanced/TLSAndSRTPSecurity/SRTPTroubleshooting'));

const TLSAndSRTPSecurity: RouteObject[] = [
  {
    path: '/voip/diagnostics/advanced/tls-srtp/tls-handshake-certs',
    element: <TLSHandshakeAndCertificates />,
  },
  {
    path: '/voip/diagnostics/advanced/tls-srtp/srtp-troubleshooting',
    element: <SRTPTroubleshooting />,
  },
];

export default TLSAndSRTPSecurity;

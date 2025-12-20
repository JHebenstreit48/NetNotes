import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AppIDIPSURL = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Advanced/NGFWFeatures/AppIDIPSURL'));
const SSLTLSDecryption = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Advanced/NGFWFeatures/SSLTLSDecryption'));

const NGFWFeatures: RouteObject[] = [
  {
    path: '/firewalls/advanced/ngfw/appid-ips-url',
    element: <AppIDIPSURL />,
  },
  {
    path: '/firewalls/advanced/ngfw/ssl-tls-decryption',
    element: <SSLTLSDecryption />,
  },
];

export default NGFWFeatures;

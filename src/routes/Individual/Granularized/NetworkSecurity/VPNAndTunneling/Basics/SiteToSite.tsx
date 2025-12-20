import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IPsecIKEv2Overview = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/VPNAndTunneling/Basics/SiteToSite/IPsecIKEv2Overview'));
const CryptoMapsAndVTIs = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/VPNAndTunneling/Basics/SiteToSite/CryptoMapsAndVTIs'));

const SiteToSite: RouteObject[] = [
  {
    path: '/vpn/basics/site-to-site/ipsec-ikev2',
    element: <IPsecIKEv2Overview />,
  },
  {
    path: '/vpn/basics/site-to-site/crypto-maps-vtis',
    element: <CryptoMapsAndVTIs />,
  },
];

export default SiteToSite;

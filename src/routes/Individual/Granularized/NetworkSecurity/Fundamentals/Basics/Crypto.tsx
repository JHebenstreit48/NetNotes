import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EncryptionBasics = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Fundamentals/Basics/Crypto/EncryptionBasics'));
const KeysCertificatesAndTrust = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Fundamentals/Basics/Crypto/KeysCertificatesAndTrust'));

const Crypto: RouteObject[] = [
  {
    path: '/fundamentals/basics/crypto/encryption-basics',
    element: <EncryptionBasics />,
  },
  {
    path: '/fundamentals/basics/crypto/keys-certs-trust',
    element: <KeysCertificatesAndTrust />,
  },
];

export default Crypto;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ASN1AndBERDER = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/OSIModel/Basics/Presentation/ASN1AndBERDER'));
const TransferSyntax = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/OSIModel/Basics/Presentation/TransferSyntax'));

const Presentation: RouteObject[] = [
  {
    path: '/coreconcepts/osimodel/basics/presentation/asn1-and-ber-der',
    element: <ASN1AndBERDER />,
  },
  {
    path: '/coreconcepts/osimodel/basics/presentation/transfer-syntax',
    element: <TransferSyntax />,
  },
];

export default Presentation;

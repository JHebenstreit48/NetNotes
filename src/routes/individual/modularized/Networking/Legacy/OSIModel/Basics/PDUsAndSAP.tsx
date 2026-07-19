import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PDUNamesByLayer = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/OSIModel/Basics/PDUsAndSAP/PDUNamesByLayer'));
const SAPSDUPCI = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/OSIModel/Basics/PDUsAndSAP/SAPSDUPCI'));

const PDUsAndSAP: RouteObject[] = [
  {
    path: '/coreconcepts/osimodel/basics/pdus-and-sap/pdu-names-by-layer',
    element: <PDUNamesByLayer />,
  },
  {
    path: '/coreconcepts/osimodel/basics/pdus-and-sap/sap-sdu-pci',
    element: <SAPSDUPCI />,
  },
];

export default PDUsAndSAP;

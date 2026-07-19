import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomDevicesAndDefaults = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Advanced/TemplatesAndFiles/CustomDevicesAndDefaults'));
const ExportImport = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Advanced/TemplatesAndFiles/ExportImport'));

const TemplatesAndFiles: RouteObject[] = [
  {
    path: '/packettracer/advanced/templates-and-files/custom-devices-and-defaults',
    element: <CustomDevicesAndDefaults />,
  },
  {
    path: '/packettracer/advanced/templates-and-files/export-and-import',
    element: <ExportImport />,
  },
];

export default TemplatesAndFiles;

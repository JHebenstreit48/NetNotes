import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PaletteAndModules = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Basics/DevicesAndCabling/PaletteAndModules'));
const CablingAndConsole = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Basics/DevicesAndCabling/CablingAndConsole'));

const DevicesAndCabling: RouteObject[] = [
  {
    path: '/packettracer/basics/devices-and-cabling/palette-and-modules',
    element: <PaletteAndModules />,
  },
  {
    path: '/packettracer/basics/devices-and-cabling/cabling-and-console',
    element: <CablingAndConsole />,
  },
];

export default DevicesAndCabling;

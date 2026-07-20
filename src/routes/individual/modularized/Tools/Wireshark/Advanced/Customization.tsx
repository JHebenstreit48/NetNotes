import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ColumnsAndColoring = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Advanced/Customization/ColumnsAndColoring'));
const ExtcapAndTShark = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Advanced/Customization/ExtcapAndTShark'));

const Customization: RouteObject[] = [
  {
    path: '/wireshark/advanced/customization/columns-and-coloring',
    element: <ColumnsAndColoring />,
  },
  {
    path: '/wireshark/advanced/customization/extcap-and-tshark',
    element: <ExtcapAndTShark />,
  },
];

export default Customization;

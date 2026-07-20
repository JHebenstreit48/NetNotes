import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AppliancesAndImport = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Basics/ImagesAndTemplates/AppliancesAndImport'));
const IOSvIOU = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Basics/ImagesAndTemplates/IOSvIOU'));

const ImagesAndTemplates: RouteObject[] = [
  {
    path: '/gns3/basics/images-and-templates/appliances-and-import',
    element: <AppliancesAndImport />,
  },
  {
    path: '/gns3/basics/images-and-templates/iosv-iou-licensing',
    element: <IOSvIOU />,
  },
];

export default ImagesAndTemplates;

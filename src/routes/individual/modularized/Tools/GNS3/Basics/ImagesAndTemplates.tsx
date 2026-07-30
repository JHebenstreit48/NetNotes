import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AppliancesAndImport = lazy(() => import('@/pages/mainTabs/Tools/GNS3/Basics/ImagesAndTemplates/AppliancesAndImport'));
const IOSvIOU = lazy(() => import('@/pages/mainTabs/Tools/GNS3/Basics/ImagesAndTemplates/IOSvIOU'));

const ImagesAndTemplates: RouteObject[] = [
  {
    path: '/tools/gns3/basics/images-and-templates/appliances-and-import',
    element: <AppliancesAndImport />,
  },
  {
    path: '/tools/gns3/basics/images-and-templates/iosv-iou-licensing',
    element: <IOSvIOU />,
  },
];

export default ImagesAndTemplates;

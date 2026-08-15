import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AppliancesAndImport = lazy(() => import('@/pages/mainTabs/ToolsAndTesting/Tools/GNS3/Basics/ImagesAndTemplates/AppliancesAndImport'));
const IOSvIOU = lazy(() => import('@/pages/mainTabs/ToolsAndTesting/Tools/GNS3/Basics/ImagesAndTemplates/IOSvIOU'));

const ImagesAndTemplates: RouteObject[] = [
  {
    path: '/networking/legacy/protocols-and-statuses/gns3/basics/images-and-templates/appliances-and-import',
    element: <AppliancesAndImport />,
  },
  {
    path: '/networking/legacy/protocols-and-statuses/gns3/basics/images-and-templates/iosv-iou-licensing',
    element: <IOSvIOU />,
  },
];

export default ImagesAndTemplates;

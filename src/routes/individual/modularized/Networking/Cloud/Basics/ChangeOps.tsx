import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FirmwareAndStaging = lazy(
  () => import('@/pages/mainTabs/Networking/Cloud/Basics/ChangeOps/FirmwareAndStaging')
);
const RollbackAndAudit = lazy(
  () => import('@/pages/mainTabs/Networking/Cloud/Basics/ChangeOps/RollbackAndAudit')
);

const ChangeOps: RouteObject[] = [
  {
    path: '/networking/cloud/basics/change-ops/firmware-and-staging',
    element: <FirmwareAndStaging />,
  },
  {
    path: '/networking/cloud/basics/change-ops/rollback-and-audit',
    element: <RollbackAndAudit />,
  },
];

export default ChangeOps;
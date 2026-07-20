import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DockerIntegration = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Advanced/ContainersAndVMs/DockerIntegration'));
const QEMUKVMTips = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Advanced/ContainersAndVMs/QEMUKVMTips'));

const ContainersAndVMs: RouteObject[] = [
  {
    path: '/gns3/advanced/containers-and-vms/docker-integration',
    element: <DockerIntegration />,
  },
  {
    path: '/gns3/advanced/containers-and-vms/qemu-kvm-tips',
    element: <QEMUKVMTips />,
  },
];

export default ContainersAndVMs;

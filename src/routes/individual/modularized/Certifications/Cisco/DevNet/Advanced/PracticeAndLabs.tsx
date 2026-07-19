import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PythonAndRESTLabs = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Advanced/PracticeAndLabs/PythonAndRESTLabs'));
const AutomationWithAnsible = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Advanced/PracticeAndLabs/AutomationWithAnsible'));

const PracticeAndLabs: RouteObject[] = [
  {
    path: '/certifications/cisco/devnet/advanced/practice-and-labs/python-and-rest-labs',
    element: <PythonAndRESTLabs />,
  },
  {
    path: '/certifications/cisco/devnet/advanced/practice-and-labs/automation-with-ansible',
    element: <AutomationWithAnsible />,
  },
];

export default PracticeAndLabs;

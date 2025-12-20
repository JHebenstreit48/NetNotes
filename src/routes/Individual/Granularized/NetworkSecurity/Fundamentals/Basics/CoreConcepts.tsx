import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CIAAndThreatModeling = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Fundamentals/Basics/CoreConcepts/CIAAndThreatModeling'));
const LeastPrivilegeAndDefenseInDepth = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Fundamentals/Basics/CoreConcepts/LeastPrivilegeAndDefenseInDepth'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/fundamentals/basics/core/cia-threat-modeling',
    element: <CIAAndThreatModeling />,
  },
  {
    path: '/fundamentals/basics/core/least-privilege-defense-in-depth',
    element: <LeastPrivilegeAndDefenseInDepth />,
  },
];

export default CoreConcepts;

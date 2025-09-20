import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Cisco from '@/Navigation/Individual/Topics/Certifications/Cisco';
// ------------------------- CompTIA Start -------------------------
import NetworkPlusNavigation from '@/Navigation/Individual/Granularized/Certifications/CompTIA/NetworkPlus';
import SecurityPlusNavigation from '@/Navigation/Individual/Granularized/Certifications/CompTIA/SecurityPlus';
// ------------------------- CompTIA End ---------------------------

// ------------------------- DevOps Start -------------------------
import AzureDevOpsNavigation from '@/Navigation/Individual/Granularized/Certifications/DevOps/Azure';
import DockerNavigation from '@/Navigation/Individual/Granularized/Certifications/DevOps/Docker';
import JenkinsNavigation from '@/Navigation/Individual/Granularized/Certifications/DevOps/Jenkins';
import KubernetesNavigation from '@/Navigation/Individual/Granularized/Certifications/DevOps/Kubernetes';
import TerraformNavigation from '@/Navigation/Individual/Granularized/Certifications/DevOps/Terraform';
// ------------------------- DevOps End ---------------------------



const certificationsNav: Subpage = {
    name: 'Certifications',
    subpages: [
        Cisco,
        {
            name: 'CompTIA',
            subpages: [
                NetworkPlusNavigation,
                SecurityPlusNavigation
            ]
        },
        {
            name: 'DevOps',
            subpages: [
                AzureDevOpsNavigation,
                TerraformNavigation,
                DockerNavigation,
                KubernetesNavigation,
                JenkinsNavigation
            ]
        },
    ]
};

export default certificationsNav;
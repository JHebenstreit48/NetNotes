import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Cisco from '@/Navigation/IndividualNav/FullTopics/Certifications/Cisco';
// ------------------------- CompTIA Start -------------------------
import NetworkPlusNavigation from '@/Navigation/IndividualNav/Granularized/Certifications/CompTIA/NetworkPlus';
import SecurityPlusNavigation from '@/Navigation/IndividualNav/Granularized/Certifications/CompTIA/SecurityPlus';
// ------------------------- CompTIA End ---------------------------

// ------------------------- DevOps Start -------------------------
import AzureDevOpsNavigation from '@/Navigation/IndividualNav/Granularized/Certifications/DevOps/Azure';
import DockerNavigation from '@/Navigation/IndividualNav/Granularized/Certifications/DevOps/Docker';
import JenkinsNavigation from '@/Navigation/IndividualNav/Granularized/Certifications/DevOps/Jenkins';
import KubernetesNavigation from '@/Navigation/IndividualNav/Granularized/Certifications/DevOps/Kubernetes';
import TerraformNavigation from '@/Navigation/IndividualNav/Granularized/Certifications/DevOps/Terraform';
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
import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ------------------------- Cisco Start -------------------------
import CCNANavigation from '@/Navigation/IndividualNav/Certifications/Cisco/CCNA';
import CCNPNavigation from '@/Navigation/IndividualNav/Certifications/Cisco/CCNP';
import DevNetNavigation from '@/Navigation/IndividualNav/Certifications/Cisco/DevNet';
// ------------------------- Cisco End ---------------------------

// ------------------------- CompTIA Start -------------------------
import NetworkPlusNavigation from '@/Navigation/IndividualNav/Certifications/CompTIA/NetworkPlus';
import SecurityPlusNavigation from '@/Navigation/IndividualNav/Certifications/CompTIA/SecurityPlus';
// ------------------------- CompTIA End ---------------------------

// ------------------------- DevOps Start -------------------------
import AzureDevOpsNavigation from '@/Navigation/IndividualNav/Certifications/DevOps/Azure';
import DockerNavigation from '@/Navigation/IndividualNav/Certifications/DevOps/Docker';
import JenkinsNavigation from '@/Navigation/IndividualNav/Certifications/DevOps/Jenkins';
import KubernetesNavigation from '@/Navigation/IndividualNav/Certifications/DevOps/Kubernetes';
import TerraformNavigation from '@/Navigation/IndividualNav/Certifications/DevOps/Terraform';
// ------------------------- DevOps End ---------------------------



const certificationsNav: Page = {
    name: 'Certifications',
    subpages: [
        {
            name: 'Cisco',
            subpages: [
                CCNANavigation,
                CCNPNavigation,
                DevNetNavigation
            ]
        },
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
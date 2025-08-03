import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ------------------------- Cisco Start -------------------------
import CCNANavigation from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/CCNA';
import CCNPNavigation from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/CCNP';
import DevNetNavigation from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/DevNet';
// ------------------------- Cisco End ---------------------------

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
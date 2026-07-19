import type { Subpage } from '@/types/navigation';

import Cisco from '@/navigation/individual/Topics/Certifications/Cisco';
// ------------------------- CompTIA Start -------------------------
import NetworkPlus from '@/navigation/individual/modularized/Certifications/CompTIA/NetworkPlus';
import SecurityPlus from '@/navigation/individual/modularized/Certifications/CompTIA/SecurityPlus';
// ------------------------- CompTIA End ---------------------------

// ------------------------- DevOps Start -------------------------
import AzureDevOps from '@/navigation/individual/modularized/Certifications/DevOps/Azure';
import Docker from '@/navigation/individual/modularized/Certifications/DevOps/Docker';
import Jenkins from '@/navigation/individual/modularized/Certifications/DevOps/Jenkins';
import Kubernetes from '@/navigation/individual/modularized/Certifications/DevOps/Kubernetes';
import Terraform from '@/navigation/individual/modularized/Certifications/DevOps/Terraform';
// ------------------------- DevOps End ---------------------------

const certifications: Subpage = {
    name: 'Certifications',
    subpages: [
        Cisco,
        {
            name: 'CompTIA',
            subpages: [
                NetworkPlus,
                SecurityPlus
            ]
        },
        {
            name: 'DevOps',
            subpages: [
                AzureDevOps,
                Terraform,
                Docker,
                Kubernetes,
                Jenkins
            ]
        },
    ]
};

export default certifications;
import type { Subpage } from '@/types/navigation';

import CiscoPacketTracer from '@/navigation/individual/Topics/ToolsAndTesting/Tools/CiscoPacketTracer';
import GNS3 from '@/navigation/individual/Topics/ToolsAndTesting/Tools/GNS3';
import Wireshark from '@/navigation/individual/Topics/ToolsAndTesting/Tools/Wireshark';
import Putty from '@/navigation/individual/Topics/ToolsAndTesting/Tools/PuTTy';

const tools: Subpage = {
    name: 'Tools & Testing',
    subpages: [
        CiscoPacketTracer,
        GNS3,
        Wireshark,
        Putty,
    ]
};

export default tools;
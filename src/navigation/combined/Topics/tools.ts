import type { Subpage } from '@/types/navigation';

import CiscoPacketTracer from '@/navigation/individual/Topics/Tools/CiscoPacketTracer';
import GNS3 from '@/navigation/individual/Topics/Tools/GNS3';
import Wireshark from '@/navigation/individual/Topics/Tools/Wireshark';

const tools: Subpage = {
    name: 'Tools',
    subpages: [
        CiscoPacketTracer,
        GNS3,
        Wireshark
    ]
};

export default tools;
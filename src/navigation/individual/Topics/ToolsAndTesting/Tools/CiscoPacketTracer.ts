import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/ToolsAndTesting/Tools/CiscoPacketTracer/Basics';
import Advanced from '@/navigation/individual/modularized/ToolsAndTesting/Tools/CiscoPacketTracer/Advanced';

const CiscoPacketTracer: Subpage = {
  name: 'Cisco Packet Tracer',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default CiscoPacketTracer;
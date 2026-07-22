import type { Subpage } from '@/types/navigation';

import Foundations from '@/navigation/individual/Topics/VoIP/Foundations';
import Diagnostics from '@/navigation/individual/Topics/VoIP/Diagnostics';
import Tools from '@/navigation/individual/Topics/VoIP/Tools';

const voip: Subpage = {
    name: 'VoIP',
    subpages: [
        Foundations,
        Diagnostics,
        Tools,
    ]
};

export default voip;
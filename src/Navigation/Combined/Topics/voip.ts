import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Foundations from '@/Navigation/Individual/Topics/VoIP/Foundations';
import Diagnostics from '@/Navigation/Individual/Topics/VoIP/Diagnostics';
import Tools from '@/Navigation/Individual/Topics/VoIP/Tools';

const voip: Subpage = {
    name: 'VoIP',
    subpages: [
        Foundations,
        Diagnostics,
        Tools,
    ]
};

export default voip;
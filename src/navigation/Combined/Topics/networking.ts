import type { Subpage } from '@/types/navigation';

import Foundations from '@/navigation/individual/Topics/Networking/Foundations';
import TCPIPModel from '@/navigation/individual/Topics/Networking/TCPIPModel';
import Switching from '@/navigation/individual/Topics/Networking/Switching';
import Wireless from '@/navigation/individual/Topics/Networking/Wireless';
import Mobile from '@/navigation/individual/Topics/Networking/Mobile';
import Cloud from '@/navigation/individual/Topics/Networking/Cloud';
import Legacy from '@/navigation/individual/Topics/Networking/Legacy';

const networking: Subpage = {
  name: 'Networking',
  subpages: [
    Foundations,
    TCPIPModel,
    Switching,
    Wireless,
    Mobile,
    Cloud, 
    Legacy
  ],
};

export default networking;
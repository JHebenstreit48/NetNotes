import type { Subpage } from '@/types/navigation';

import Layers from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers';

const TCPIPModel: Subpage = {
  name: 'TCP/IP Model',
  subpages: [Layers],
};

export default TCPIPModel;
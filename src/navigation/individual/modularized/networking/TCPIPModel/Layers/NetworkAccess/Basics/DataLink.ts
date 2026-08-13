import type { Subpage } from '@/types/navigation';

import CoreConcepts from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/CoreConcepts';
import FramesAndAddressing from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing';

const DataLink: Subpage = {
    name: 'Layer 2: Data Link',
    subpages: [
        CoreConcepts,
        FramesAndAddressing
    ]
};

export default DataLink;
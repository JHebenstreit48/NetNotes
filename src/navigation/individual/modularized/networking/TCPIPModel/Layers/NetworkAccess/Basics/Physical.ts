import type { Subpage } from '@/types/navigation';

import SignalsAndMedia from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/SignalsAndMedia';
import TransmissionConcepts from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/TransmissionConcepts';
import CablingAndInterfaces from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/CablingAndInterfaces';
import WiringStandards from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards';
import BandwidthAndThroughput from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/BandwidthAndThroughput';

const Physical: Subpage ={
    name: 'Layer 1: Physical',
    subpages: [
        SignalsAndMedia,
        TransmissionConcepts,
        CablingAndInterfaces,
        WiringStandards,
        BandwidthAndThroughput
    ]
}

export default Physical;
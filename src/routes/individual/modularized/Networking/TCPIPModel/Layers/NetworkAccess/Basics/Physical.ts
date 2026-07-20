import { RouteObject } from "react-router-dom";

import SignalsAndMedia from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/SignalsAndMedia';
import TransmissionConcepts from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/TransmissionConcepts';
import CablingAndInterfaces from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/CablingAndInterfaces';
import WiringStandards from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards';
import BandwidthAndThroughput from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/BandwidthAndThroughput';
import EncapDeEncap from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/EncapDeEncap';

const Physical: RouteObject[] = [
    ...SignalsAndMedia,
    ...TransmissionConcepts,
    ...CablingAndInterfaces,
    ...WiringStandards,
    ...BandwidthAndThroughput,
    ...EncapDeEncap,
];

export default Physical;
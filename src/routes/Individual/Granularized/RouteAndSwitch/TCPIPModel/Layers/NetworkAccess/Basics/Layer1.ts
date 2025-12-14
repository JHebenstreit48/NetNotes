import { RouteObject } from 'react-router-dom';

import SignalsAndMedia from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/PhysicalLayer1/SignalsAndMedia';
import TransmissionConcepts from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/PhysicalLayer1/TransmissionConcepts';
import BandwidthAndThroughput from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/PhysicalLayer1/BandwidthThroughput';
import EncapAndDeencap from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/PhysicalLayer1/EncapAndDeencap';


const Layer1: RouteObject[] = [
    ...SignalsAndMedia,
    ...TransmissionConcepts,
    ...BandwidthAndThroughput,
    ...EncapAndDeencap
];

export default Layer1;
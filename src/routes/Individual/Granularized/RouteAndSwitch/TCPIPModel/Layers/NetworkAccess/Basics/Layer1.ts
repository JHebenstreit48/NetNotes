import { RouteObject } from 'react-router-dom';

import SignalsAndMedia from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/SignalsAndMedia';
import TransmissionConcepts from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/TransmissionConcepts';
import BandwidthAndThroughput from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/BandwidthThroughput';
import EncapAndDeencap from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/EncapAndDeencap';

const Layer1: RouteObject[] = [
    ...SignalsAndMedia,
    ...TransmissionConcepts,
    ...BandwidthAndThroughput,
    ...EncapAndDeencap
];

export default Layer1;
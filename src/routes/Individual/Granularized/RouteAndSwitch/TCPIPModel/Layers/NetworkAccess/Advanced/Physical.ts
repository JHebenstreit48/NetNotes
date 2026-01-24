import { RouteObject } from "react-router-dom";

import EncodingAndLineCodes from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/EncodingAndLineCodes';
import NegotiationAndDuplex from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NegotiationAndDuplex';
import NoiseAndDistance from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NoiseAndDistance';

const Physical: RouteObject[] = [
    ...EncodingAndLineCodes,
    ...NegotiationAndDuplex,
    ...NoiseAndDistance,
];

export default Physical;
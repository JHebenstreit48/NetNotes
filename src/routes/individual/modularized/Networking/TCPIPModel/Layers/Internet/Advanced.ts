import { RouteObject } from "react-router-dom";

import FragmentationAndMTU from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Internet/Advanced/FragmentationAndMTU';
import NATAndPAT from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Internet/Advanced/NATAndPAT';
import MulticastFundamentals from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Internet/Advanced/MulticastFundamentals';

const Advanced: RouteObject[] = [
    ...FragmentationAndMTU,
    ...NATAndPAT,
    ...MulticastFundamentals,
];

export default Advanced;
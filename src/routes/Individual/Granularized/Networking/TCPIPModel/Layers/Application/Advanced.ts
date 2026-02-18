import { RouteObject } from "react-router-dom";

import NetworkServices from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Application/Advanced/NetworkServices';
import RemoteAccesss from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Application/Advanced/RemoteAccess';
import UserDataAndPrivaacy from '@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Application/Advanced/UserDataAndPrivacy';

const Advanced: RouteObject[] = [
    ...NetworkServices,
    ...RemoteAccesss,
    ...UserDataAndPrivaacy
];

export default Advanced;
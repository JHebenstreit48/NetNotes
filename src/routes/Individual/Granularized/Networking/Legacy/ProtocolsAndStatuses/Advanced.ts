import { RouteObject } from "react-router-dom";

import DecommissionAndMigration from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Advanced/DecommissionAndMigration";
import Security from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Advanced/Security";
import CompatAndInterop from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Advanced/CompatAndInterop";
import RoutingLegacy from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Advanced/RoutingLegacy";
import LabAndCapture from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Advanced/LabAndCapture";

const Advanced: RouteObject[] = [
  ...DecommissionAndMigration,
  ...Security,
  ...CompatAndInterop,
  ...RoutingLegacy,
  ...LabAndCapture,
];

export default Advanced;

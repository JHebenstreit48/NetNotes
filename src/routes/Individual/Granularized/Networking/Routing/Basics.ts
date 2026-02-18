import { RouteObject } from "react-router-dom";

import Concepts from "@/routes/Individual/Granularized/Networking/Routing/Basics/Concepts";
import ProtocolFamilies from "@/routes/Individual/Granularized/Networking/Routing/Basics/ProtocolFamilies";

const Basics: RouteObject[] = [
  ...Concepts,
  ...ProtocolFamilies,
];

export default Basics;

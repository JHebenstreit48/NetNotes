import { RouteObject } from "react-router-dom";

import Concepts from "@/routes/individual/modularized/Networking/Routing/Basics/Concepts";
import ProtocolFamilies from "@/routes/individual/modularized/Networking/Routing/Basics/ProtocolFamilies";

const Basics: RouteObject[] = [
  ...Concepts,
  ...ProtocolFamilies,
];

export default Basics;

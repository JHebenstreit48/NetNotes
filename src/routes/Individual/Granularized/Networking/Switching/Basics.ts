import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Networking/Switching/Basics/Fundamentals";
import HardwareAndHistory from "@/routes/Individual/Granularized/Networking/Switching/Basics/HardwareAndPortTypes";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...HardwareAndHistory,
];

export default Basics;

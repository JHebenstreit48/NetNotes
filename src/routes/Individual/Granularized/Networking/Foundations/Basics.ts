import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Networking/Foundations/Basics/Fundamentals";
import DevicesAndModels from "@/routes/Individual/Granularized/Networking/Foundations/Basics/DevicesAndModels";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...DevicesAndModels,
];

export default Basics;
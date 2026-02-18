import { RouteObject } from "react-router-dom";

import Overview from "@/routes/Individual/Granularized/Networking/Foundations/Basics/Fundamentals";
import DevicesAndModels from "@/routes/Individual/Granularized/Networking/Foundations/Basics/DevicesAndModels";

const Basics: RouteObject[] = [
  ...Overview,
  ...DevicesAndModels,
];

export default Basics;
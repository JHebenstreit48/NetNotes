import { RouteObject } from "react-router-dom";

import Overview from "@/routes/Individual/Granularized/RouteAndSwitch/Fundamentals/Basics/Overview";
import DevicesAndModels from "@/routes/Individual/Granularized/RouteAndSwitch/Fundamentals/Basics/DevicesAndModels";

const Basics: RouteObject[] = [
  ...Overview,
  ...DevicesAndModels,
];

export default Basics;
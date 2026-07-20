import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/individual/modularized/Networking/Foundations/Basics/Fundamentals";
import DevicesAndModels from "@/routes/individual/modularized/Networking/Foundations/Basics/DevicesAndModels";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...DevicesAndModels,
];

export default Basics;
import { RouteObject } from "react-router-dom";

import CoreConcepts from "@/routes/Individual/Granularized/NetworkSecurity/Fundamentals/Basics/CoreConcepts";
import Crypto from "@/routes/Individual/Granularized/NetworkSecurity/Fundamentals/Basics/Crypto";

const Basics: RouteObject[] = [
  ...CoreConcepts,
  ...Crypto,
];

export default Basics;

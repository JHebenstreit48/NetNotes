import { RouteObject } from "react-router-dom";

import CoreConcepts from "@/routes/individual/modularized/NetworkSecurity/Fundamentals/Basics/CoreConcepts";
import Crypto from "@/routes/individual/modularized/NetworkSecurity/Fundamentals/Basics/Crypto";

const Basics: RouteObject[] = [
  ...CoreConcepts,
  ...Crypto,
];

export default Basics;

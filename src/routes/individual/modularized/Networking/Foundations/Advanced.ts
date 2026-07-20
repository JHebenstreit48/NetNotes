import { RouteObject } from "react-router-dom";

import ArchitectureAndDesign from "@/routes/individual/modularized/Networking/Foundations/Advanced/ArchitectureAndDesign";
import PlanesAndTraffic from "@/routes/individual/modularized/Networking/Foundations/Advanced/PlanesAndTraffic";
import DiagramsAndDocs from "@/routes/individual/modularized/Networking/Foundations/Advanced/DiagramsAndDocs";
import Troubleshooting from "@/routes/individual/modularized/Networking/Foundations/Advanced/Troubleshooting";

const Advanced: RouteObject[] = [
  ...ArchitectureAndDesign,
  ...PlanesAndTraffic,
  ...DiagramsAndDocs,
  ...Troubleshooting,
];

export default Advanced;
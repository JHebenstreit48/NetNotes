import { RouteObject } from "react-router-dom";

import ArchitectureAndDesign from "@/routes/Individual/Granularized/Networking/Foundations/Advanced/ArchitectureAndDesign";
import PlanesAndTraffic from "@/routes/Individual/Granularized/Networking/Foundations/Advanced/PlanesAndTraffic";
import DiagramsAndDocs from "@/routes/Individual/Granularized/Networking/Foundations/Advanced/DiagramsAndDocs";
import Troubleshooting from "@/routes/Individual/Granularized/Networking/Foundations/Advanced/Troubleshooting";

const Advanced: RouteObject[] = [
  ...ArchitectureAndDesign,
  ...PlanesAndTraffic,
  ...DiagramsAndDocs,
  ...Troubleshooting,
];

export default Advanced;
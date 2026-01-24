import { RouteObject } from "react-router-dom";

import ArchitectureAndDesign from "@/routes/Individual/Granularized/RouteAndSwitch/Fundamentals/Advanced/ArchitectureAndDesign";
import PlanesAndTraffic from "@/routes/Individual/Granularized/RouteAndSwitch/Fundamentals/Advanced/PlanesAndTraffic";
import DiagramsAndDocs from "@/routes/Individual/Granularized/RouteAndSwitch/Fundamentals/Advanced/DiagramsAndDocs";
import Troubleshooting from "@/routes/Individual/Granularized/RouteAndSwitch/Fundamentals/Advanced/Troubleshooting";

const Advanced: RouteObject[] = [
  ...ArchitectureAndDesign,
  ...PlanesAndTraffic,
  ...DiagramsAndDocs,
  ...Troubleshooting,
];

export default Advanced;
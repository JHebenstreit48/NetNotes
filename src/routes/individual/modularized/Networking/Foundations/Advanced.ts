import { RouteObject } from "react-router-dom";

import ArchitectureAndDesign from "@/routes/individual/modularized/Networking/Foundations/Advanced/ArchitectureAndDesign";
import PlanesAndTraffic from "@/routes/individual/modularized/Networking/Foundations/Advanced/PlanesAndTraffic";
import DiagramsAndDocs from "@/routes/individual/modularized/Networking/Foundations/Advanced/DiagramsAndDocs";
import RoutingProtocols from '@/routes/individual/modularized/Networking/Foundations/Advanced/RoutingProtocols';
import Troubleshooting from "@/routes/individual/modularized/Networking/Foundations/Advanced/Troubleshooting";

const Advanced: RouteObject[] = [
  ...ArchitectureAndDesign,
  ...PlanesAndTraffic,
  ...DiagramsAndDocs,
  ...RoutingProtocols,
  ...Troubleshooting,
];

export default Advanced;
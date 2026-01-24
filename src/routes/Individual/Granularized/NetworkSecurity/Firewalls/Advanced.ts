import { RouteObject } from "react-router-dom";

import NGFWFeatures from "@/routes/Individual/Granularized/NetworkSecurity/Firewalls/Advanced/NGFWFeatures";
import PolicyAndAccessControl from "@/routes/Individual/Granularized/NetworkSecurity/Firewalls/Advanced/PolicyAndAccessControl";
import HighAvailability from "@/routes/Individual/Granularized/NetworkSecurity/Firewalls/Advanced/HighAvailability";

const Advanced: RouteObject[] = [
  ...NGFWFeatures,
  ...PolicyAndAccessControl,
  ...HighAvailability,
];

export default Advanced;

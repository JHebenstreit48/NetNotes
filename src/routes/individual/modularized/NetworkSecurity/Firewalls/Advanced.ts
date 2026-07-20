import { RouteObject } from "react-router-dom";

import NGFWFeatures from "@/routes/individual/modularized/NetworkSecurity/Firewalls/Advanced/NGFWFeatures";
import PolicyAndAccessControl from "@/routes/individual/modularized/NetworkSecurity/Firewalls/Advanced/PolicyAndAccessControl";
import HighAvailability from "@/routes/individual/modularized/NetworkSecurity/Firewalls/Advanced/HighAvailability";

const Advanced: RouteObject[] = [
  ...NGFWFeatures,
  ...PolicyAndAccessControl,
  ...HighAvailability,
];

export default Advanced;

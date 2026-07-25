import { RouteObject } from "react-router-dom";

import Cisco from "@/routes/individual/modularized/Certifications/Cisco";
// import CompTIA from "@/routes/individual/modularized/Certifications/CompTIA";
// import DevOps from "@/routes/individual/modularized/Certifications/DevOps";

const certifications: RouteObject[] = [
    ...Cisco,
    // ...CompTIA,
    // ...DevOps
];

export default certifications;
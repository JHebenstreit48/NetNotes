import { RouteObject } from "react-router-dom";

import Eight0211Fundamentals from "@/routes/Individual/Granularized/Networking/Wireless/Basics/EightOTwoElevenFundamentals";
import WLANArchitecture from "@/routes/Individual/Granularized/Networking/Wireless/Basics/WLANArchitecture";
import Association from "@/routes/Individual/Granularized/Networking/Wireless/Basics/Association";
import Troubleshooting from "@/routes/Individual/Granularized/Networking/Wireless/Basics/Troubleshooting";

const Basics: RouteObject[] = [
  ...Eight0211Fundamentals,
  ...WLANArchitecture,
  ...Association,
  ...Troubleshooting,
];

export default Basics;

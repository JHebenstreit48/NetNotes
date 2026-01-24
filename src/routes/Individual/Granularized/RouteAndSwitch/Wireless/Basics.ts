import { RouteObject } from "react-router-dom";

import Eight0211Fundamentals from "@/routes/Individual/Granularized/RouteAndSwitch/Wireless/Basics/EightOTwoElevenFundamentals";
import WLANArchitecture from "@/routes/Individual/Granularized/RouteAndSwitch/Wireless/Basics/WLANArchitecture";
import Association from "@/routes/Individual/Granularized/RouteAndSwitch/Wireless/Basics/Association";
import Troubleshooting from "@/routes/Individual/Granularized/RouteAndSwitch/Wireless/Basics/Troubleshooting";

const Basics: RouteObject[] = [
  ...Eight0211Fundamentals,
  ...WLANArchitecture,
  ...Association,
  ...Troubleshooting,
];

export default Basics;

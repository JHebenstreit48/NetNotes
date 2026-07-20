import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Tools/Wireshark/Basics';
// import Advanced from '@/routes/individual/modularized/Tools/Wireshark/Advanced';

const Wireshark: RouteObject[] = [
  ...Basics,
//   ...Advanced,
];
export default Wireshark;
import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/VoIP/Foundations/Basics/Fundamentals';
import CallBasics from '@/routes/individual/modularized/VoIP/Foundations/Basics/CallBasics';


const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CallBasics
];

export default Basics;
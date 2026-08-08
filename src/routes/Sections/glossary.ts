import { RouteObject } from "react-router-dom";

import Networking from "@routes/individual/FullRoutes/Glossary/Networking";
import VoIP from "@routes/individual/FullRoutes/Glossary/VoIP";

const glossary: RouteObject[] = [
  ...Networking,
  ...VoIP
];

export default glossary;
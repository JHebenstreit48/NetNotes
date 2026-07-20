import { RouteObject } from "react-router-dom";
import WebAndNameResolution from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Application/Basics/WebAndNameResolution';
import ClientServerRoles from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Application/Basics/ClientServerRoles';
import EmailAndCommunication from '@/routes/individual/modularized/Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication';

const Basics: RouteObject[] = [
  ...WebAndNameResolution,
  ...ClientServerRoles,
  ...EmailAndCommunication
];

export default Basics;
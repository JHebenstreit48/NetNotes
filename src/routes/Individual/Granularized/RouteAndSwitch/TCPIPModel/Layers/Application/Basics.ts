import { RouteObject } from "react-router-dom";
import WebAndNameResolution from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/WebAndNameResolution';
import ClientServerConcepts from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/ClientServerConcepts';
import EmailAndCommunication from '@/routes/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/EmailAndCommunication';

const Basics: RouteObject[] = [
  ...WebAndNameResolution,
  ...ClientServerConcepts,
  ...EmailAndCommunication
];

export default Basics;
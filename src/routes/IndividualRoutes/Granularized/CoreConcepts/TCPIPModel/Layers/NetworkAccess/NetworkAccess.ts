import { RouteObject } from 'react-router-dom';

// Data Link Layer Start
import CoreConcepts from '@/routes/IndividualRoutes/Granularized/CoreConcepts/TCPIPModel/Layers/NetworkAccess/DataLink/CoreConcepts';
// Data Link Layer End

// Physical Layer Start
// import SignalsMedia from '@/routes/IndividualRoutes/Granularized/CoreConcepts/TCPIPModel/Layers/NetworkAccess/Physical/SignalsMedia';
import TransmissionConcepts from '@/routes/IndividualRoutes/Granularized/CoreConcepts/TCPIPModel/Layers/NetworkAccess/Physical/TransmissionConcepts';
// Physical Layer End

const NetworkAccess: RouteObject[] = [

    // Data Link Layer Start
    ...CoreConcepts,
    // Data Link Layer End

    // Physical Layer Start
    // ...SignalsMedia,
    ...TransmissionConcepts
    // Physical Layer End
];

export default NetworkAccess;

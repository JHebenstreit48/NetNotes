import type { Subpage } from '@/types/navigation';

const ServicePrimitives: Subpage = {
  name: 'Service Primitives',
  subpages: [
    {
      name: 'Req/Ind/Resp/Conf',
      path: '/networking/legacy/osi-model/basics/service-primitives/req-ind-resp-conf',
    },
    {
      name: 'Encapsulation Path',
      path: '/networking/legacy/osi-model/basics/service-primitives/encapsulation-path',
    }
  ]
};

export default ServicePrimitives;
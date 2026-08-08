import type { Subpage } from '@/types/navigation';

import Networking from '@/navigation/individual/Topics/Glossary/Networking';
import VoIP from '@/navigation/individual/Topics/Glossary/VoIP';

const glossary: Subpage = {
    name: 'Glossary & Resources',
    subpages: [
        Networking,
        VoIP
    ]
};

export default glossary;
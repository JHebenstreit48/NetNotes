import type { Subpage } from '@/types/navigation';

const Anki: Subpage = {
  name: 'Anki',
  subpages: [
    {
      name: 'Introduction',
      path: '/certifications/cisco/ccna/basics/resources/anki/introduction',
    },
    {
      name: 'Reviewing Cards & Scheduling',
      path: '/certifications/cisco/ccna/basics/resources/anki/reviewing-and-scheduling',
    },
    {
      name: 'Decks & Importing Flashcards',
      path: '/certifications/cisco/ccna/basics/resources/anki/deck-management-and-settings/decks-and-importing-flashcards',
    }
  ],
};

export default Anki;
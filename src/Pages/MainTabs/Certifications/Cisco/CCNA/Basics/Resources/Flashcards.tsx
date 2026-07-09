import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Flashcards = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/Resources/Flashcards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Flashcards (Anki/Quizlet)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Flashcards;

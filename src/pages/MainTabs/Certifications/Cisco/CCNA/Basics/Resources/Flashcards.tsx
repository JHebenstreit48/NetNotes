import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

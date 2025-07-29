import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = '/CoreConcepts/Basics/Fundamentals/Overview/Introduction';

  return (
    <>
      <PageLayout>
        <Header
          text="Introduction"
          size="md"
        />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;

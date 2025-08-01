import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Internet = () => {
  const markdownFilePath = '/CoreConcepts/Basics/Fundamentals/Overview/Internet';

  return (
    <>
      <PageLayout>
        <Header text="Internet/Networks" size="sm" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Internet;
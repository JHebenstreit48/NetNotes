import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Introduction = () => {
  const markdownFilePath = '/CoreNetworkingTopics/NetworkingOverview/Introduction';

  return (
    <>
      <PageLayout>
        <Header
          text="Introduction"
          size="sm"
        />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;

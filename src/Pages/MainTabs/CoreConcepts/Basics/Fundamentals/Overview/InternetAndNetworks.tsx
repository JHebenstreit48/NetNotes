import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Internet = () => {
  const markdownFilePath = '/CoreNetworkingTopics/NetworkingOverview/Internet';

  return (
    <>
      <PageLayout>
        <Header text="Internet and Networks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Internet;

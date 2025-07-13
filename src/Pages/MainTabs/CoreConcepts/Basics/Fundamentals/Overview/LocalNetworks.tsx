import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LocalNetworks = () => {
  const markdownFilePath = '/CoreNetworkingTopics/NetworkingOverview/LocalNetworks';

  return (
    <>
      <PageLayout>
        <Header text="Local Networks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocalNetworks;

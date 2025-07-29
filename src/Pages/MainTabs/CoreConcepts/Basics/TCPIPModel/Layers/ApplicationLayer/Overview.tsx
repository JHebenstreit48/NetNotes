import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ApplicationLayerOverview = () => {
  const markdownFilePath = '/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/Overview';

  return (
    <>
      <PageLayout>
        <Header text="Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ApplicationLayerOverview;

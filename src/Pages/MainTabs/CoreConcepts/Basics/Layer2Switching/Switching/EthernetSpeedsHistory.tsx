import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EthernetSpeedsHistory = () => {
  const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/EthernetSpeedsHistory';

  return (
    <>
      <PageLayout>
        <Header text="History of Ethernet Speeds" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EthernetSpeedsHistory;

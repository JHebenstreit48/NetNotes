import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WirelessStandards = () => {
  const markdownFilePath = '/CoreNetworkingTopics/WirelessNetworking';

  return (
    <>
      <PageLayout>
        <Header text="Wireless Networking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WirelessStandards;

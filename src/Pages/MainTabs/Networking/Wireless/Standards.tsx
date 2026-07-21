import PageLayout from '@/components/NavigationUI/PageLayout';
import Notes from '@/components/PageComponents/Notes/Notes';

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

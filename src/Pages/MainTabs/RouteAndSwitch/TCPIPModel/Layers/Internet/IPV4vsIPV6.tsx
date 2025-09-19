import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IPV4vsIPV6 = () => {
  const markdownFilePath = '/CoreNetworkingTopics/TCPIPModel/InternetLayer/IPv4vsIPv6';

  return (
    <>
      <PageLayout>
        <Header text="IPv4 vs IPv6" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPV4vsIPV6;

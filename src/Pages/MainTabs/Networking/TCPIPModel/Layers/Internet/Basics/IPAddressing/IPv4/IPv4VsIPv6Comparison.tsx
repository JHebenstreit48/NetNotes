import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IPv4VsIPv6Comparison = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4/IPv4vsIPv6';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Internet Layer - IP Addressing - IPv4 vs IPv6 Comparison" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv4VsIPv6Comparison;
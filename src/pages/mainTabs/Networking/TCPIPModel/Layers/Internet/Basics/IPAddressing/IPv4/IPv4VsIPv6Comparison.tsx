import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IPv4VsIPv6Comparison = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4/IPv4vsIPv6';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - IP Addressing - IPv4 vs IPv6 Comparison" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv4VsIPv6Comparison;
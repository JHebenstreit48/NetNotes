import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IPv4Subnetting = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/IPv4Subnetting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - IP Addressing - Subnetting & Gateways - IPv4 Subnetting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv4Subnetting;

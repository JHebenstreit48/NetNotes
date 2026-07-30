import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IPv6Subnetting = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/IPv6Subnetting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - IP Addressing - Subnetting & Gateways - IPv6 Subnetting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv6Subnetting;

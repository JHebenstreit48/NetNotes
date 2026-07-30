import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BroadcastDomainAndSegmentation = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/BroadcastDomainsAndSegmentation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - IP Addressing - Subnetting & Gateways - Broadcast Domains & Segmentation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BroadcastDomainAndSegmentation;
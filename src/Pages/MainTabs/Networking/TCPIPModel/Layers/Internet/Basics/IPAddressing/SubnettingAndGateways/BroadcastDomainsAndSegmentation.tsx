import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BroadcastDomainAndSegmentation = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/BroadcastDomainsAndSegmentation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Internet Layer - IP Addressing - Subnetting & Gateways - Broadcast Domains & Segmentation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BroadcastDomainAndSegmentation;
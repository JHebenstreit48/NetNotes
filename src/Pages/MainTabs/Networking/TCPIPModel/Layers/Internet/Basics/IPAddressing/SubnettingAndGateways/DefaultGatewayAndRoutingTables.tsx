import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DefaultGatewayAndRoutingTables = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/DefaultGatewayAndRouting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TCP/IP Model - Internet Layer - IP Addressing - Default Gateway & Routing Tables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DefaultGatewayAndRoutingTables;
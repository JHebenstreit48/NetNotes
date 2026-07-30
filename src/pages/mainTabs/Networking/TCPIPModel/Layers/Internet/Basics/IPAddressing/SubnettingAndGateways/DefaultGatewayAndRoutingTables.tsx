import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DefaultGatewayAndRoutingTables = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/DefaultGatewayAndRouting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - IP Addressing - Subnetting & Gateways - Default Gateway & Routing Tables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DefaultGatewayAndRoutingTables;
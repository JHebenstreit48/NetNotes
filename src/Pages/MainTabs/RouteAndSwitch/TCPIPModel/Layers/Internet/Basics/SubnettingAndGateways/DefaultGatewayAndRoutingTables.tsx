import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DefaultGatewayAndRoutingTables = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Internet/Basics/SubnettingAndGateways/DefaultGatewayAndRoutingTables';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Default Gateway & Routing Tables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DefaultGatewayAndRoutingTables;

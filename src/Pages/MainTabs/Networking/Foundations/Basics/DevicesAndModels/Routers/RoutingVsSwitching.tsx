import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTile from '@/Components/PageComponents/PageTitle'
import Notes from '@/Components/PageComponents/Notes/Notes';

const RoutingVsSwitching = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Routers/RoutingVsSwitching';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTile title="Devices & Models - Routers - Routing vs Switching" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoutingVsSwitching;
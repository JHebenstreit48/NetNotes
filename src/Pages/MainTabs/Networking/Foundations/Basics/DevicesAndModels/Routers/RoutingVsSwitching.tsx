import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

const RoutingVsSwitching = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Routers/RoutingVsSwitching';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - Routers - Routing vs Switching" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoutingVsSwitching;
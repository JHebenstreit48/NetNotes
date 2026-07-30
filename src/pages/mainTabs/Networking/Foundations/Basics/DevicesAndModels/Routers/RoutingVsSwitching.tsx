import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

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
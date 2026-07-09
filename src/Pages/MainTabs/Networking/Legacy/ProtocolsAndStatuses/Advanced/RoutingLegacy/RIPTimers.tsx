import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RIPTimers = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/RoutingLegacy/RIPTimers';

  return (
    <>
      <PageLayout>
        <PageTitle title="RIP Timers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RIPTimers;

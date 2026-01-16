import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RIPTimers = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced/RoutingLegacy/RIPTimers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RIP Timers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RIPTimers;

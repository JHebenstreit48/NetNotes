import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

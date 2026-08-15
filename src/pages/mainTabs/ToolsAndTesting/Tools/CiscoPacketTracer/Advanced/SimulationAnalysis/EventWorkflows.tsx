import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EventWorkflows = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/SimulationAnalysis/EventWorkflows';

  return (
    <>
      <PageLayout>
        <PageTitle title="Event Workflows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventWorkflows;

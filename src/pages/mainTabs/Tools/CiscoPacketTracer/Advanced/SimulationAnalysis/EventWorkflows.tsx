import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

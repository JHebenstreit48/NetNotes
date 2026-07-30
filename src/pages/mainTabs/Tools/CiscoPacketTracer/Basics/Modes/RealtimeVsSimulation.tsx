import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RealtimeVsSimulation = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/Modes/RealtimeVsSimulation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Realtime vs Simulation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RealtimeVsSimulation;

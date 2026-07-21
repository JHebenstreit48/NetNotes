import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

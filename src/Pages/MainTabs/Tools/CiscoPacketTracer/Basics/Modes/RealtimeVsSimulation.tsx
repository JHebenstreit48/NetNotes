import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

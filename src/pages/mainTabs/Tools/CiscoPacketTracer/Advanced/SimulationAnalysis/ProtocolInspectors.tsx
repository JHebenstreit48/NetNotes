import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ProtocolInspectors = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/SimulationAnalysis/ProtocolInspectors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Protocol Inspectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtocolInspectors;

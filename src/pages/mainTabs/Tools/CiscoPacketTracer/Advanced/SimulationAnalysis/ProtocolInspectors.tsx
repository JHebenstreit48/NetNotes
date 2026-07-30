import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

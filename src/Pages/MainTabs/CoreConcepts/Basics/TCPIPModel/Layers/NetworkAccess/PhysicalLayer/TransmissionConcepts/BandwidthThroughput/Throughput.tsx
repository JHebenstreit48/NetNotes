import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Throughput = () => {
  const markdownFilePath = '/CoreConcepts/Basics/TCPIPModel/Layers/NetworkAccess/Layer1-Physical/TransmissionConcepts/BandwidthThroughput/Throughput';

  return (
    <>
      <PageLayout>
        <Header text="Throughput" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default Throughput;

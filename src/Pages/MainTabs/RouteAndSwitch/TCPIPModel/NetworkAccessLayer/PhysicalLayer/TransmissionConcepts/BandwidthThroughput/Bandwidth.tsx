import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Bandwidth = () => {
  const markdownFilePath = '/CoreConcepts/Basics/TCPIPModel/Layers/NetworkAccess/Layer1-Physical/TransmissionConcepts/BandwidthThroughput/Bandwidth';

  return (
    <>
      <PageLayout>
        <Header text="Bandwidth" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default Bandwidth;

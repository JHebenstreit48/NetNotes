import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MultiplexingDemuxAndUseCases = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Advanced/UDPDetails/MultiplexingDemuxAndUseCases';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multiplexing/Demux & Use Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiplexingDemuxAndUseCases;

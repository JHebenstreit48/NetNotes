import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

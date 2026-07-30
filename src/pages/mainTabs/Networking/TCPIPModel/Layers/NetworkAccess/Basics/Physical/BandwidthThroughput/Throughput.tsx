import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Throughput = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/BandwidthThroughput/Throughput';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - Throughput" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Throughput;
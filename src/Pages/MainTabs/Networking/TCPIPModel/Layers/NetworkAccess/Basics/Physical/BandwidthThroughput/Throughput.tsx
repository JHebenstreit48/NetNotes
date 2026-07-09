import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
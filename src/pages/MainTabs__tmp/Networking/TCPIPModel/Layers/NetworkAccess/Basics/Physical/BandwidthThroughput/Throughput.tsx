import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
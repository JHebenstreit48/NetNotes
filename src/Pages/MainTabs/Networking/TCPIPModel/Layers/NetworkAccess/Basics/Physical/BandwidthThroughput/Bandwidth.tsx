import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Bandwidth = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/BandwidthThroughput/Bandwidth';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - Bandwidth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Bandwidth;
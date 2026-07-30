import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
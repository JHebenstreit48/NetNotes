import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const BIA = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing/BurnedInAddress';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Data Link - BIA" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BIA;
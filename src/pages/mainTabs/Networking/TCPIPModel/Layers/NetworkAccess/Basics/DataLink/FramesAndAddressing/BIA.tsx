import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
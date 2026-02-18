import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BIA = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing/BurnedInAddress';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Network Access - Data Link - BIA" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BIA;
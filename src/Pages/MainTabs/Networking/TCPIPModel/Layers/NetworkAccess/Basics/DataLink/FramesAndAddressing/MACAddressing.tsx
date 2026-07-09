import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MACAddressing = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing/MACAddressing';

  return (
    <>
      <PageLayout>
        <PageTitle title="MAC Addressing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MACAddressing;

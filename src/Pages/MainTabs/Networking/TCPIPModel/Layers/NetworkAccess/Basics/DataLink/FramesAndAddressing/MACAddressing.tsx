import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

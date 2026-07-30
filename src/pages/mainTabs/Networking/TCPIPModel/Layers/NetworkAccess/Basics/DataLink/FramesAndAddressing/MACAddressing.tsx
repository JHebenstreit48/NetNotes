import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

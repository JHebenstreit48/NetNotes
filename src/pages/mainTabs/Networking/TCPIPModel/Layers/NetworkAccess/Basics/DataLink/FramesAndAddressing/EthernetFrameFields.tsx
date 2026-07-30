import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EthernetFrameFields = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/FramesAndAddressing/EthernetFrameFields';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ethernet Frame Fields" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EthernetFrameFields;

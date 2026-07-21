import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

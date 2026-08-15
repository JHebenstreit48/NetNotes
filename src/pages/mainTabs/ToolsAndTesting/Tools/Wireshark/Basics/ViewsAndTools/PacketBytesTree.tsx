import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PacketBytesTree = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/ViewsAndTools/PacketAndBytesAndTree';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wireshark Views and Tools - Packet/Bytes/Tree" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PacketBytesTree;
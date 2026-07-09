import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
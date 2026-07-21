import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
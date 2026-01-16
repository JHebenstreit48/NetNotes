import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PacketBytesTree = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/ViewsAndTools/PacketBytesTree';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Packet/Bytes/Tree" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PacketBytesTree;

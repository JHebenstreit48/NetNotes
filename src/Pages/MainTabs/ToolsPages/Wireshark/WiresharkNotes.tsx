import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Wireshark = () => {
  const markdownFilePath = '/NetworkingTools/Wireshark';

  return (
    <>
      <PageLayout>
        <Header text="Wireshark" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Wireshark;
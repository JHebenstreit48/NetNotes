import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const ARP = () => {
  const markdownFilePath = '/DataLinkLayer/ARP';

  return (
    <>
      <PageLayout>
        <Header text="ARP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ARP;

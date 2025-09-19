import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

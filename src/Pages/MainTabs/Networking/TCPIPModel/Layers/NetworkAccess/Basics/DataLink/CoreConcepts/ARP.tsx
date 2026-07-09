import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ARP = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/CoreConcepts/ARP';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Data Link - ARP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ARP;
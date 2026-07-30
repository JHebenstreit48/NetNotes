import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
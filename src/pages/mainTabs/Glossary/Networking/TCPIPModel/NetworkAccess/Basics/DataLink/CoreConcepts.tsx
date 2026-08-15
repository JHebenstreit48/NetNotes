import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CoreConcepts = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/NetworkAccess/DataLink/CoreConcepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - TCP/IP Model - Network Access - Data Link - Core Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreConcepts;
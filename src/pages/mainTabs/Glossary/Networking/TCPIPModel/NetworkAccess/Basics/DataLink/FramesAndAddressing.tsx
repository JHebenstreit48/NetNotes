import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FramesAndAddressing = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/NetworkAccess/DataLink/FramesAndAddressing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - TCP/IP Model - Network Access - Data Link - Frames & Addressing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FramesAndAddressing;
import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const CommStandards = () => {
  const markdownFilePath = '/CoreConcepts/Basics/TCPIPModel/NetworkAccess/Layer1-Physical/TransmissionConcepts/CommunicationStandards';

  return (
    <>
      <PageLayout>
        <Header text="Standards of Communication" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommStandards;

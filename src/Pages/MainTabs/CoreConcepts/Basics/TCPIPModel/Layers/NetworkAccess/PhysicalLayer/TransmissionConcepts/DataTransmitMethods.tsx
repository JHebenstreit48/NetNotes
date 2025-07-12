import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const DataTransmitMethod = () => {
  const markdownFilePath = '/CoreConcepts/Basics/TCPIPModel/NetworkAccess/Layer1-Physical/TransmissionConcepts/DataTransmitMethods';

  return (
    <>
      <PageLayout>
        <Header text="Data Transmission Methods" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default DataTransmitMethod;

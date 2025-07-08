import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Standards = () => {
  const markdownFilePath = '/PhysicalLayer/StandardsOfCommunication';

  return (
    <>
      <PageLayout>
        <Header text="Standards of Communication" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Standards;

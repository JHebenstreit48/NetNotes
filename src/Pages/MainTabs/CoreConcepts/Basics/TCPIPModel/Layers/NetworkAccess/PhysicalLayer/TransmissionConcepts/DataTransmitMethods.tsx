import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const DataRepresentation = () => {
  const markdownFilePath = '/PhysicalLayer/DataRepresentation';

  return (
    <>
      <PageLayout>
        <Header text="Data Representation" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default DataRepresentation;

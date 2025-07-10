import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const BIA = () => {
  const markdownFilePath = '/DataLinkLayer/BIA';

  return (
    <>
      <PageLayout>
        <Header text="Burned-In Address" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default BIA;

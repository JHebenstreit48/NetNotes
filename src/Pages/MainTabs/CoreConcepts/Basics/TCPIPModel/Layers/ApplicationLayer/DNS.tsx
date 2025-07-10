import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const DNS = () => {
  const markdownFilePath = '/ApplicationLayer/DNS';

  return (
    <>
      <PageLayout>
        <Header text="DNS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DNS;

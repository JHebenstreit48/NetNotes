import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const TCPvsUDP = () => {
  const markdownFilePath = '/TransportLayer/TCPvsUDP';

  return (
    <>
      <PageLayout>
        <Header text="TCP vs UDP" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default TCPvsUDP;

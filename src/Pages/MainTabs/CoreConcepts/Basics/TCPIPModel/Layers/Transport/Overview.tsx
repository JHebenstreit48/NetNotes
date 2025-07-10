import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const TransportLayerOverview = () => {
  const markdownFilePath = '/TransportLayer/Overview';

  return (
    <>
      <PageLayout>
        <Header text="Transport Layer Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TransportLayerOverview;

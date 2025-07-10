import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const PhysicalLayerOverview = () => {
  const markdownFilePath = '/CoreNetworkingTopics/TCPIPModel/PhysicalLayer/Overview';

  return (
    <>
      <PageLayout>
        <Header text="Physical Layer Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PhysicalLayerOverview;

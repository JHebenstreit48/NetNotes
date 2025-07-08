import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const NetworkAccessOverview = () => {
  const markdownFilePath =
    '/CoreNetworkingTopics/TCPIPModel/NetworkAcessLayer/NetworkAccessLayerOverview';

  return (
    <>
      <PageLayout>
        <Header text="Network Acess Layer Overview" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default NetworkAccessOverview;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const StaticRouting = () => {
  const markdownFilePath = '/CoreNetworkingTopics/RoutingProtocols/StaticRouting';

  return (
    <>
      <PageLayout>
        <Header text="Static Routing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticRouting;
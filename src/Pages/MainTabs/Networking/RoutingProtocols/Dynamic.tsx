import PageLayout from '@/Components/NavigationUI/PageLayout';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DynamicRouting = () => {
  const markdownFilePath = '/CoreNetworkingTopics/RoutingProtocols/DynamicRouting';

  return (
    <>
      <PageLayout>
        <Header text="Dynamic Routing" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default DynamicRouting;

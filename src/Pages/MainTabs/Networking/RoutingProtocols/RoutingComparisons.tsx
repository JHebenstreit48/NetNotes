import PageLayout from '@/Components/NavigationUI/PageLayout';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RoutingComparisons = () => {
  const markdownFilePath = '/CoreNetworkingTopics/RoutingProtocols/RoutingComparisons';

  return (
    <>
      <PageLayout>
        <Header text="Routing Comparisons" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoutingComparisons;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/RoutingProtocols/StaticAndDynamic/Static/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Routing Protocols - Static & Dynamic - Static - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;
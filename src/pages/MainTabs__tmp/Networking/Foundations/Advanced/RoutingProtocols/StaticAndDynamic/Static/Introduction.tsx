import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
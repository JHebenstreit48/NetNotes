import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/RoutingProtocols/StaticAndDynamic/Dynamic/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Routing Protocols - Static & Dynamic - Dynamic - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;
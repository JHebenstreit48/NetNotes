import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
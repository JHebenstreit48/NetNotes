import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RoutingProtocolOverview = () => {
  const markdownFilePath = 'RouteAndSwitch/Routing/Basics/Concepts/RoutingProtocolOverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Routing Protocol Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoutingProtocolOverview;

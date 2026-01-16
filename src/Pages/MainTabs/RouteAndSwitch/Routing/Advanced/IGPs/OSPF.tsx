import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OSPF = () => {
  const markdownFilePath = 'RouteAndSwitch/Routing/Advanced/IGPs/OSPF';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="OSPF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OSPF;

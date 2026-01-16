import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StaticVsDynamic = () => {
  const markdownFilePath = 'RouteAndSwitch/Routing/Basics/Concepts/StaticVsDynamic';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Static vs Dynamic" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticVsDynamic;

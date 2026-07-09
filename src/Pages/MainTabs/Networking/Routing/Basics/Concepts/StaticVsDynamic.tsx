import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StaticVsDynamic = () => {
  const markdownFilePath = 'Networking/Routing/Basics/Concepts/StaticVsDynamic';

  return (
    <>
      <PageLayout>
        <PageTitle title="Static vs Dynamic" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticVsDynamic;

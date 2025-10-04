import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'RouteAndSwitch/Fundamentals/Basics/Overview/Introduction';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fundamentals - Introduction To Networking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;
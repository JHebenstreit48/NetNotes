import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Internet = () => {
  const markdownFilePath = 'RouteAndSwitch/Fundamentals/Basics/Overview/Internet';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fundamentals - Internet and Global Networks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Internet;
import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Layer2 = () => {
  const markdownFilePath =
    'RouteAndSwitch/Switching/Basics/Fundamentals/Layer2';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Switching - Layer 2 Switching" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Layer2;
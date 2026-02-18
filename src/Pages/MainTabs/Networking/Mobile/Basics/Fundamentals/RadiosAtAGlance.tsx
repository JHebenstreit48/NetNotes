import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RadiosAtAGlance = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Fundamentals/RadiosAtAGlance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Radios at a Glance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RadiosAtAGlance;

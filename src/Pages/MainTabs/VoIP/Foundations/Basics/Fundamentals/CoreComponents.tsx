import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoreComponents = () => {
  const markdownFilePath = 'VoIP/Foundations/Basics/Fundamentals/CoreComponents';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Core Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreComponents;

import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CoreComponents = () => {
  const markdownFilePath = 'VoIP/Foundations/Basics/Fundamentals/CoreComponents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Core Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreComponents;

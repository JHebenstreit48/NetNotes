import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

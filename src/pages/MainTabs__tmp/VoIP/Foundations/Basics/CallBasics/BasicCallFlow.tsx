import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const BasicCallFlow = () => {
  const markdownFilePath = 'VoIP/Foundations/Basics/CallBasics/BasicCallFlow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Basic Call Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicCallFlow;

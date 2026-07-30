import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

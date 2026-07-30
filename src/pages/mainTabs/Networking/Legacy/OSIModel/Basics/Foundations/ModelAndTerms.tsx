import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ModelAndTerms = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Foundations/ModelAndTerms';

  return (
    <>
      <PageLayout>
        <PageTitle title="Model & Terms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModelAndTerms;

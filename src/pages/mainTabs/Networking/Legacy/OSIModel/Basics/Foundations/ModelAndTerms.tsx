import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

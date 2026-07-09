import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

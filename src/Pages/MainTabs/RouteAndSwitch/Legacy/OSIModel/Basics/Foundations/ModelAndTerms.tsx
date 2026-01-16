import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModelAndTerms = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Basics/Foundations/ModelAndTerms';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Model & Terms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModelAndTerms;

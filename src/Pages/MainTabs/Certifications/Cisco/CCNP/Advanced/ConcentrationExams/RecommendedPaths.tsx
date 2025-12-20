import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RecommendedPaths = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/ConcentrationExams/RecommendedPaths';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Recommended Paths" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RecommendedPaths;

import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RecommendedPaths = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/ConcentrationExams/RecommendedPaths';

  return (
    <>
      <PageLayout>
        <PageTitle title="Recommended Paths" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RecommendedPaths;

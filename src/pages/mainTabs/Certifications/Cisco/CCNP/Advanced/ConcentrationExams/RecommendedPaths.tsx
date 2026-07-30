import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

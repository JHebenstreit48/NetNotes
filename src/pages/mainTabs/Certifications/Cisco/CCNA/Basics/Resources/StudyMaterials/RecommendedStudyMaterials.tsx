import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RecommendedStudyMaterials = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/Resources/RecommendedStudyMaterials';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cisco - CCNA - Basics - Study Materials - Recommended Study Materials" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RecommendedStudyMaterials;
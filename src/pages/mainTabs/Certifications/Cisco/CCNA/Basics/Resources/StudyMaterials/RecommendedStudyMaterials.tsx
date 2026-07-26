import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
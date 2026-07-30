import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SectionsAndScoring = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/LabFundamentals/SectionsAndScoring';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sections & Scoring" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SectionsAndScoring;

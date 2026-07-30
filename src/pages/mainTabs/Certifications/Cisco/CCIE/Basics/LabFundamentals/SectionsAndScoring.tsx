import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

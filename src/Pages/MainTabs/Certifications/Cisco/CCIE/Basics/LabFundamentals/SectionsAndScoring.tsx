import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SectionsAndScoring = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/LabFundamentals/SectionsAndScoring';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sections & Scoring" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SectionsAndScoring;

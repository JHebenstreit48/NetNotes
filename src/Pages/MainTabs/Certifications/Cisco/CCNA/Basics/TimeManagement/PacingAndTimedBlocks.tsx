import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PacingAndTimedBlocks = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/TimeManagement/PacingAndTimedBlocks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Pacing & Timed Blocks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PacingAndTimedBlocks;

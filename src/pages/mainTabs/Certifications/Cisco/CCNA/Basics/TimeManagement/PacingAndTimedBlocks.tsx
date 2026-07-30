import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PacingAndTimedBlocks = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/TimeManagement/PacingAndTimedBlocks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pacing & Timed Blocks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PacingAndTimedBlocks;

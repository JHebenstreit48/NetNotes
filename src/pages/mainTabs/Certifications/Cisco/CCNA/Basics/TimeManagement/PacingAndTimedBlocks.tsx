import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

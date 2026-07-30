import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PracticeLabsAndRacks = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/Resources/PracticeLabsAndRacks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Practice Labs & Racks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PracticeLabsAndRacks;

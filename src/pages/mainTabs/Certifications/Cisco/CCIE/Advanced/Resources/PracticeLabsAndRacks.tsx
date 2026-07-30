import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
